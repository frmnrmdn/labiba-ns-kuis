// State khusus mengaji
let currentMengajiCategory = null;
let currentMengajiQ = 0;
let scoreMengaji = 0;
let answeredMengaji = false;
let mengajiQuestions = [];

// LOGIKA KUIS MENGAJI
// Mulai kuis mengaji – acak 10 soal dari pool
function startMengajiQuiz(cat) {
  playClickSound();
  currentMengajiCategory = cat;
  currentMengajiQ = 0;
  scoreMengaji = 0;

  // Pisahkan soal per subtype lalu ambil sesuai kuota, sisanya diacak
  const bentuk = cat.questions.filter((q) => q.subtype === "bentuk");
  const suara = cat.questions.filter((q) => q.subtype === "suara");
  const lainnya = cat.questions.filter(
    (q) => q.subtype !== "bentuk" && q.subtype !== "suara",
  );

  // Ambil 3 bentuk, 4 suara, 3 lainnya – diacak urutannya
  const picked = [
    ...shuffle(bentuk).slice(0, 3),
    ...shuffle(suara).slice(0, 4),
    ...shuffle(lainnya).slice(0, 3),
  ];
  mengajiQuestions = shuffle(picked);

  document.getElementById("scoreBadgeMengaji").textContent = "⭐ 0";
  document.getElementById("quizMengajiLabel").textContent =
    cat.icon + " " + cat.label;
  showScreen("quizMengaji");
  renderMengajiQuestion();
}

function renderMengajiQuestion() {
  answeredMengaji = false;
  const q = mengajiQuestions[currentMengajiQ];
  const total = mengajiQuestions.length;

  const pct = (currentMengajiQ / total) * 100;
  document.getElementById("progressFillMengaji").style.width = pct + "%";
  document.getElementById("progressLabelMengaji").textContent =
    currentMengajiQ + 1 + " / " + total;

  // Render kartu soal sesuai subtype
  const card = document.getElementById("questionCardMengaji");
  let audioBtn = "";

  // Soal tipe suara – tampilkan tombol putar TTS
  if (q.subtype === "suara") {
    // Tombol putar – kirim audioFile juga
    audioBtn = `
  <button class="play-audio-btn" 
    onclick="speakArabic('${q.audioHuruf}', '${q.audioFile || ""}')">
    🔊 Dengarkan Hurufnya
  </button>
`;
  }

  card.innerHTML = `
    <div class="question-type-badge badge-mengaji">${q.type}</div>
    <div class="question-text">${q.q}</div>
    <span class="arabic-display">${q.arabic}</span>
    ${audioBtn}
  `;

  // Otomatis putar suara untuk soal tipe suara
  if (q.subtype === "suara" && soundOn) {
    setTimeout(() => speakArabic(q.audioHuruf), 500);
  }

  const hintBox = document.getElementById("hintBoxMengaji");
  hintBox.classList.remove("show");
  document.getElementById("hintTextMengaji").textContent = q.hint;
  document.getElementById("nextBtnMengaji").style.display = "none";

  // Render tombol jawaban Arab
  const grid = document.getElementById("answersGridMengaji");
  grid.innerHTML = "";
  grid.className = "answers-grid arabic-grid";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "ans-btn arabic-btn";
    btn.textContent = opt.label;
    btn.onclick = () => handleMengajiAnswer(idx, btn, q);
    grid.appendChild(btn);
  });
}

function handleMengajiAnswer(idx, btn, q) {
  if (answeredMengaji) return;
  answeredMengaji = true;
  playClickSound();

  const allBtns = document.querySelectorAll("#answersGridMengaji .ans-btn");
  allBtns.forEach((b) => (b.disabled = true));

  if (idx === q.correct) {
    btn.classList.add("correct");
    scoreMengaji += 10;
    document.getElementById("scoreBadgeMengaji").textContent =
      "⭐ " + scoreMengaji;
    showFeedback(true, true);
    playCorrectSound();
    spawnConfettiIslami();
  } else {
    btn.classList.add("wrong");
    allBtns[q.correct].classList.add("correct");
    showFeedback(false, true);
    playWrongSound();
    setTimeout(() => {
      document.getElementById("modalTitle").textContent = "Hampir Benar! 😊";
      document.getElementById("modalBody").innerHTML =
        `Jawaban yang benar adalah <strong style="font-size:1.8rem;direction:rtl;">${q.options[q.correct].label}</strong>
        <br><br>💡 ${q.hint}`;
      document.getElementById("modalOverlay").classList.remove("hidden");
    }, 700);
  }

  setTimeout(() => {
    hideFeedback();
    document.getElementById("nextBtnMengaji").style.display = "";
  }, 1200);
}

function showHintMengaji() {
  playClickSound();
  document.getElementById("hintBoxMengaji").classList.add("show");
}

function nextQuestionMengaji() {
  playClickSound();
  currentMengajiQ++;
  if (currentMengajiQ >= mengajiQuestions.length) {
    showResultMengaji();
  } else {
    renderMengajiQuestion();
  }
}

// Halaman hasil mengaji
function showResultMengaji() {
  showScreen("resultMengaji");
  const total = mengajiQuestions.length * 10; // max 100
  const pct = scoreMengaji / total;
  let title, msg, stars;

  if (pct >= 1) {
    title = "MasyaAllah! 🏆";
    msg =
      "Sempurna! Kamu hafal semua huruf hijaiyahnya! Terus semangat mengaji!";
    stars = "⭐⭐⭐";
    playCorrectSound();
    spawnConfettiIslami(120);
  } else if (pct >= 0.6) {
    title = "Bagus Sekali! 🌙";
    msg =
      "Hebat mengajinya! Terus belajar dan kamu pasti bisa lebih baik lagi!";
    stars = "⭐⭐";
    playCorrectSound();
    spawnConfettiIslami(60);
  } else {
    title = "Terus Semangat! 💪";
    msg =
      "Latihan terus ya! Semakin sering belajar, semakin lancar mengajinya!";
    stars = "⭐";
    playTone(440, "sine", 0.5, 0.2);
  }

  document.getElementById("resultTitleMengaji").textContent = title;
  document.getElementById("resultScoreMengaji").textContent = scoreMengaji;
  document.getElementById("resultMsgMengaji").textContent = msg;
  document.getElementById("resultStarsMengaji").textContent = stars;
}

function repeatMengaji() {
  playClickSound();
  startMengajiQuiz(currentMengajiCategory);
}
