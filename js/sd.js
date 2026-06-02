// STATE VARIABEL – SEKOLAH DASAR
let sdCurrentKelas = null; // objek kelas terpilih
let sdCurrentMapel = null; // objek mapel terpilih
let sdQuestions = []; // 15 soal yang diacak
let sdCurrentQ = 0;
let sdScore = 0;
let sdBenar = 0;
let sdSalah = 0;
let sdAnswered = false;

// NAVIGASI SEKOLAH DASAR
function goToSd() {
  playClickSound();
  buildSdKelasGrid();
  showScreen("sdKelas");
}

function goToSdKelas() {
  playClickSound();
  showScreen("sdKelas");
}

function goToSdMapel() {
  playClickSound();
  buildSdMapelGrid(sdCurrentKelas);
  showScreen("sdMapel");
}

// BUILD GRID KELAS
function buildSdKelasGrid() {
  const grid = document.getElementById("sdKelasGrid");
  grid.innerHTML = "";
  SD_KELAS_LIST.forEach((k) => {
    const card = document.createElement("div");
    card.className = "sd-kelas-card";
    card.innerHTML = `
      <span class="sd-kelas-icon">${k.icon}</span>
      <span class="sd-kelas-label">${k.label}</span>
      <span class="sd-kelas-sub">6 Mata Pelajaran</span>
    `;
    card.onclick = () => {
      playClickSound();
      buildSdMapelGrid(k);
    };
    grid.appendChild(card);
  });
}

// BUILD GRID MAPEL
function buildSdMapelGrid(kelas) {
  sdCurrentKelas = kelas;
  document.getElementById("sdMapelNavTitle").textContent =
    kelas.label + " – Pilih Mapel";
  document.getElementById("sdMapelTitle").textContent =
    `${kelas.icon} ${kelas.label} – Pilih Mata Pelajaran!`;

  const icon = soundOn ? "🔊" : "🔇";
  ["soundToggle5", "soundToggle6"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = icon;
  });

  const grid = document.getElementById("sdMapelGrid");
  grid.innerHTML = "";
  SD_MAPEL_LIST.forEach((m) => {
    const card = document.createElement("div");
    card.className = `sd-mapel-card ${m.cls}`;
    card.innerHTML = `
      <span class="sd-mapel-icon">
        ${
          m.id === "bing"
            ? `<img src="${m.icon}" class="mapel-icon-bing" alt="${m.label}">`
            : m.icon
        }
      </span>
      <span class="sd-mapel-label">${m.label}</span>
      <span class="sd-mapel-sub">15 soal pilihan ganda</span>
    `;
    card.onclick = () => startSdQuiz(kelas, m);
    grid.appendChild(card);
  });

  showScreen("sdMapel");
}

// DATA SOAL SEKOLAH DASAR
const SD_MAPEL_LIST = [
  { id: "bindo", label: "Bahasa Indonesia", icon: "📖", cls: "mapel-bindo" },
  { id: "mtk", label: "Matematika", icon: "🔢", cls: "mapel-mtk" },
  { id: "ipa", label: "IPA", icon: "🔬", cls: "mapel-ipa" },
  { id: "ips", label: "IPS", icon: "🌍", cls: "mapel-ips" },
  { id: "pai", label: "Pend. Agama Islam", icon: "🕌", cls: "mapel-pai" },
  {
    id: "bing",
    label: "Bahasa Inggris",
    icon: "img/english.png",
    cls: "mapel-bing",
  },
];

const SD_KELAS_LIST = [
  { id: 1, label: "Kelas 1", icon: "1️⃣" },
  { id: 2, label: "Kelas 2", icon: "2️⃣" },
  { id: 3, label: "Kelas 3", icon: "3️⃣" },
  { id: 4, label: "Kelas 4", icon: "4️⃣" },
  { id: 5, label: "Kelas 5", icon: "5️⃣" },
  { id: 6, label: "Kelas 6", icon: "6️⃣" },
];

// MULAI KUIS SD
function startSdQuiz(kelas, mapel) {
  playClickSound();
  sdCurrentKelas = kelas;
  sdCurrentMapel = mapel;
  sdCurrentQ = 0;
  sdScore = 0;
  sdBenar = 0;
  sdSalah = 0;

  // Ambil soal, acak, ambil 15
  const pool = (SD_DATA[kelas.id] || {})[mapel.id] || [];
  sdQuestions = shuffle([...pool]).slice(0, 15);

  if (mapel.id === "bing") {
    document.getElementById("quizSdLabel").innerHTML =
      `<img src="${mapel.icon}" class="quiz-icon-bing" alt="${mapel.label}"> ${mapel.label}`;
  } else {
    document.getElementById("quizSdLabel").innerHTML =
      `${mapel.icon} ${mapel.label}`;
  }
  showScreen("quizSd");
  renderSdQuestion();
}

// RENDER SOAL SD
function renderSdQuestion() {
  sdAnswered = false;
  const q = sdQuestions[sdCurrentQ];
  const total = sdQuestions.length;
  const optLetters = ["A", "B", "C", "D"];

  // Progress
  const pct = (sdCurrentQ / total) * 100;
  document.getElementById("progressFillSd").style.width = pct + "%";
  document.getElementById("progressLabelSd").textContent =
    `${sdCurrentQ + 1} / ${total}`;

  // Kartu soal
  document.getElementById("questionCardSd").innerHTML = `
    <div class="sd-q-badge">Soal ${sdCurrentQ + 1}</div>
    <div class="question-text" style="font-size:1.2rem;margin-bottom:0">${q.q}</div>
  `;

  // Hint
  document.getElementById("hintBoxSd").classList.remove("show");
  document.getElementById("hintTextSd").textContent = q.hint;
  document.getElementById("nextBtnSd").style.display = "none";

  // Tombol jawaban
  const grid = document.getElementById("answersGridSd");
  grid.innerHTML = "";
  grid.className = "answers-grid cols-sd";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "ans-btn-sd";
    btn.innerHTML = `<span class="opt-tag">${optLetters[idx]}</span><span>${opt.label}</span>`;
    btn.onclick = () => handleSdAnswer(idx, btn, q);
    grid.appendChild(btn);
  });
}

// HANDLE JAWABAN SD
function handleSdAnswer(idx, btn, q) {
  if (sdAnswered) return;
  sdAnswered = true;
  playClickSound();

  const allBtns = document.querySelectorAll("#answersGridSd .ans-btn-sd");
  allBtns.forEach((b) => (b.disabled = true));

  if (idx === q.correct) {
    btn.classList.add("correct");
    sdBenar++;
    sdScore = Math.round((sdBenar / sdQuestions.length) * 100);
    showFeedback(true);
    playCorrectSound();
    spawnConfetti();
  } else {
    btn.classList.add("wrong");
    allBtns[q.correct].classList.add("correct");
    sdSalah++;
    showFeedback(false);
    playWrongSound();
    setTimeout(() => {
      document.getElementById("modalTitle").textContent = "Hampir Benar! 😊";
      document.getElementById("modalBody").innerHTML =
        `Jawaban yang benar: <strong>${q.options[q.correct].label}</strong><br>💡 ${q.hint}`;
      document.getElementById("modalOverlay").classList.remove("hidden");
    }, 700);
  }

  setTimeout(() => {
    hideFeedback();
    document.getElementById("nextBtnSd").style.display = "";
  }, 1200);
}

function showHintSd() {
  playClickSound();
  document.getElementById("hintBoxSd").classList.add("show");
}

function nextQuestionSd() {
  playClickSound();
  sdCurrentQ++;
  if (sdCurrentQ >= sdQuestions.length) {
    showResultSd();
  } else {
    renderSdQuestion();
  }
}

// HASIL SD
function showResultSd() {
  showScreen("resultSd");

  const pct = sdBenar / sdQuestions.length;
  let title, msg, stars;

  if (pct >= 0.9) {
    title = "LUAR BIASA! 🏆";
    msg = "Nilai sempurna! Kamu sangat pintar! Pertahankan prestasimu!";
    stars = "⭐⭐⭐";
    playCorrectSound();
    spawnConfetti(120);
  } else if (pct >= 0.7) {
    title = "BAGUS SEKALI! 🌟";
    msg = "Nilai kamu bagus! Terus semangat belajar ya!";
    stars = "⭐⭐";
    playCorrectSound();
    spawnConfetti(60);
  } else if (pct >= 0.5) {
    title = "CUKUP BAIK! 💪";
    msg = "Tidak buruk! Pelajari lagi materi yang belum dikuasai ya!";
    stars = "⭐";
    playTone(440, "sine", 0.5, 0.2);
  } else {
    title = "TERUS BELAJAR! 💪";
    msg = "Jangan menyerah! Ulangi kuis ini dan kamu pasti bisa lebih baik!";
    playTone(330, "sine", 0.5, 0.15);
  }

  document.getElementById("resultTitleSd").textContent = title;
  document.getElementById("resultScoreSd").textContent = sdScore;
  document.getElementById("resultBenarSd").textContent = sdBenar;
  document.getElementById("resultSalahSd").textContent = sdSalah;
  document.getElementById("resultMsgSd").textContent = msg;
  document.getElementById("resultStarsSd").textContent = stars;
}

function repeatSd() {
  playClickSound();
  startSdQuiz(sdCurrentKelas, sdCurrentMapel);
}
