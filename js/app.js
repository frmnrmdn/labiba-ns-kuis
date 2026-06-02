// State aplikasi
let soundOn = true;
let currentCategory = null;
let currentQ = 0;
let score = 0;
let answered = false;

// Web Audio API – tanpa file eksternal
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let actx = null;

function getACtx() {
  if (!actx) actx = new AudioCtx();
  return actx;
}

function playTone(freq, type, dur, vol = 0.3) {
  if (!soundOn) return;
  try {
    const ctx = getACtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(vol, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + dur);
  } catch (e) {}
}

function playCorrectSound() {
  playTone(523, "sine", 0.15, 0.15);
  setTimeout(() => playTone(659, "sine", 0.15, 0.15), 100);
  setTimeout(() => playTone(784, "sine", 0.3, 0.15), 200);
}

function playWrongSound() {
  playTone(330, "sawtooth", 0.2, 0.15);
  setTimeout(() => playTone(220, "sawtooth", 0.3, 0.15), 150);
}

function playClickSound() {
  playTone(440, "sine", 0.08, 0.08);
}

// Fungsi Text-to-Speech untuk melafalkan huruf hijaiyah
function speakArabic(huruf, audioFile) {
  if (!soundOn) return;

  if (audioFile) {
    const ctx = getACtx();
    fetch(audioFile)
      .then((res) => res.arrayBuffer())
      .then((buf) => ctx.decodeAudioData(buf))
      .then((decoded) => {
        const source = ctx.createBufferSource();
        const gain = ctx.createGain();
        gain.gain.value = 5.0; //angka ini menentukan volume.
        source.buffer = decoded;
        source.connect(gain);
        gain.connect(ctx.destination);
        source.start(0);
      })
      .catch((e) => console.log("Audio error:", e));
    return;
  }

  if (window.speechSynthesis) {
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(huruf);
    utter.lang = "ar-SA";
    utter.rate = 0.7;
    utter.volume = 1.0;
    window.speechSynthesis.speak(utter);
  }
}

function toggleSound() {
  soundOn = !soundOn;
  const icon = soundOn ? "🔊" : "🔇";
  [
    "soundToggle",
    "soundToggle2",
    "soundToggle3",
    "soundToggle4",
    "soundToggle5",
    "soundToggle6",
  ].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.textContent = icon;
  });
}

// Tampilkan layar berdasarkan id, sembunyikan sisanya
function showScreen(id) {
  document
    .querySelectorAll(".screen")
    .forEach((s) => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function goToCategory() {
  playClickSound();
  buildCategoryGrid();
  showScreen("category");
}

function goToClassCategory() {
  playClickSound();
  const icon = soundOn ? "🔊" : "🔇";
  const el = document.getElementById("soundToggle3");
  if (el) el.textContent = icon;
  showScreen("classCategory");
}

function goToMengaji() {
  playClickSound();
  buildMengajiGrid();
  showScreen("mengajiCategory");
}

// Acak array (Fisher-Yates)
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Confetti warna islami (hijau & emas dominan)
function spawnConfettiIslami(count = 60) {
  const colors = [
    "#4CAF50",
    "#F5C857",
    "#81C784",
    "#FFF176",
    "#A5D6A7",
    "#FFD54F",
    "#ffffff",
  ];
  spawnConfettiWithColors(colors, count);
}

// Confetti standar Calistung
function spawnConfetti(count = 60) {
  const colors = [
    "#F5C857",
    "#3A9AFF",
    "#FF6B6B",
    "#4CAF50",
    "#FF9800",
    "#9C27B0",
    "#E91E63",
  ];
  spawnConfettiWithColors(colors, count);
}

function spawnConfettiWithColors(colors, count) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const el = document.createElement("div");
      el.className = "confetti-piece";
      el.style.cssText = `
        left:${Math.random() * 100}vw;
        top:-10px;
        background:${colors[Math.floor(Math.random() * colors.length)]};
        width:${6 + Math.random() * 10}px;
        height:${6 + Math.random() * 10}px;
        border-radius:${Math.random() > 0.5 ? "50%" : "2px"};
        animation-duration:${1.5 + Math.random() * 2.5}s;
        animation-delay:${Math.random() * 0.5}s;
        transform:rotate(${Math.random() * 360}deg);
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 4000);
    }, i * 20);
  }
}

function closeModal() {
  playClickSound();
  document.getElementById("modalOverlay").classList.add("hidden");
}

// Init saat halaman siap
document.addEventListener("DOMContentLoaded", () => {
  buildCategoryGrid();
  // Preload daftar suara agar TTS siap dipakai
  if (window.speechSynthesis) {
    window.speechSynthesis.getVoices();
  }
});

// Bangun grid kategori Calistung
function buildCategoryGrid() {
  const grid = document.getElementById("categoryGrid");
  grid.innerHTML = "";
  CATEGORIES.forEach((cat) => {
    const card = document.createElement("div");
    card.className = "cat-card";
    card.innerHTML = `
      <span class="cat-icon">${cat.icon}</span>
      <span class="cat-label">${cat.label}</span>
      <span class="cat-count">${cat.count} soal</span>
    `;
    card.onclick = () => startQuiz(cat);
    grid.appendChild(card);
  });
}

// Bangun grid kategori Mengaji
function buildMengajiGrid() {
  const grid = document.getElementById("mengajiGrid");
  grid.innerHTML = "";
  MENGAJI_CATEGORIES.forEach((cat) => {
    const card = document.createElement("div");
    card.className = "cat-card";
    card.innerHTML = `
      <span class="cat-icon">${cat.icon}</span>
      <span class="cat-label">${cat.label}</span>
      <span class="cat-count">10 soal</span>
    `;
    card.onclick = () => startMengajiQuiz(cat);
    grid.appendChild(card);
  });
}
