// Mulai kuis Calistung
function startQuiz(cat) {
  playClickSound();
  currentCategory = cat;
  currentQ = 0;
  score = 0;
  document.getElementById("scoreBadge").textContent = "⭐ 0";
  document.getElementById("quizCategoryLabel").textContent =
    cat.icon + " " + cat.label;
  showScreen("quiz");
  renderQuestion();
}

function renderQuestion() {
  answered = false;
  const q = currentCategory.questions[currentQ];
  const total = currentCategory.questions.length;

  const pct = (currentQ / total) * 100;
  document.getElementById("progressFill").style.width = pct + "%";
  document.getElementById("progressLabel").textContent =
    currentQ + 1 + " / " + total;

  document.getElementById("questionCard").innerHTML = `
    <div class="question-type-badge">${q.type}</div>
    <div class="question-text">${q.q}</div>
    <span class="question-img">${q.img}</span>
  `;

  const hintBox = document.getElementById("hintBox");
  hintBox.classList.remove("show");
  document.getElementById("hintText").textContent = q.hint;
  document.getElementById("nextBtn").style.display = "none";

  const grid = document.getElementById("answersGrid");
  grid.innerHTML = "";
  const hasCols4 = q.options.length === 4 && !q.options[0].icon;
  grid.className = "answers-grid" + (hasCols4 ? " cols-4" : "");

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "ans-btn";
    btn.innerHTML = opt.icon
      ? `<span class="ans-icon">${opt.icon}</span><span>${opt.label}</span>`
      : `<span style="font-size:2rem">${opt.label}</span>`;
    btn.onclick = () => handleAnswer(idx, btn, q);
    grid.appendChild(btn);
  });
}

function handleAnswer(idx, btn, q) {
  if (answered) return;
  answered = true;
  playClickSound();
  const allBtns = document.querySelectorAll(".ans-btn");
  allBtns.forEach((b) => (b.disabled = true));

  if (idx === q.correct) {
    btn.classList.add("correct");
    score += 20;
    document.getElementById("scoreBadge").textContent = "⭐ " + score;
    showFeedback(true);
    playCorrectSound();
    spawnConfetti();
  } else {
    btn.classList.add("wrong");
    allBtns[q.correct].classList.add("correct");
    showFeedback(false);
    playWrongSound();
    setTimeout(() => {
      document.getElementById("modalTitle").textContent = "Hampir Benar! 😊";
      document.getElementById("modalBody").innerHTML =
        `Jawaban yang benar adalah <strong>${q.options[q.correct].label}</strong>.<br>💡 ${q.hint}`;
      document.getElementById("modalOverlay").classList.remove("hidden");
    }, 700);
  }

  setTimeout(() => {
    hideFeedback();
    document.getElementById("nextBtn").style.display = "";
  }, 1200);
}

// Pesan feedback acak calistung
const CORRECT_MSGS = [
  "Hebat! 🌟",
  "Benar Sekali! 🎉",
  "Luar Biasa! ✨",
  "Pintar! 🏆",
  "Keren! 🚀",
];
const WRONG_MSGS = [
  "Hampir Benar! 😊",
  "Coba Lagi! 💪",
  "Semangat! 🌈",
  "Jangan Menyerah! ⭐",
];

// Pesan feedback khusus mengaji
const CORRECT_MSGS_MENGAJI = [
  "MasyaAllah! 🌟",
  "Hebat Mengajinya! 🎉",
  "Luar Biasa! ✨",
  "Pintar! 🌙",
  "Bagus Sekali! 🕌",
];
const WRONG_MSGS_MENGAJI = [
  "Hampir Benar! 😊",
  "Coba Lagi Ya! 💪",
  "Semangat! 🌈",
  "Jangan Menyerah! ⭐",
];

function showFeedback(correct, isMengaji = false) {
  const el = document.getElementById("feedbackBanner");
  el.className = "feedback-banner " + (correct ? "correct" : "wrong");
  const msgs = correct
    ? isMengaji
      ? CORRECT_MSGS_MENGAJI
      : CORRECT_MSGS
    : isMengaji
      ? WRONG_MSGS_MENGAJI
      : WRONG_MSGS;
  el.textContent = msgs[Math.floor(Math.random() * msgs.length)];
  el.classList.add("show");
}

function hideFeedback() {
  document.getElementById("feedbackBanner").classList.remove("show");
}

function showHint() {
  playClickSound();
  document.getElementById("hintBox").classList.add("show");
}

function nextQuestion() {
  playClickSound();
  currentQ++;
  if (currentQ >= currentCategory.questions.length) {
    showResult();
  } else {
    renderQuestion();
  }
}

// Halaman hasil Calistung
function showResult() {
  showScreen("result");
  const total = currentCategory.questions.length * 20;
  const pct = score / total;
  let title, msg, stars;

  if (pct >= 1) {
    title = "SEMPURNA! 🏆";
    msg = "Selamat! Kamu mendapatkan nilai sempurna! Pertahankan terus ya!";
    stars = "⭐⭐⭐";
    playCorrectSound();
    spawnConfetti(120);
  } else if (pct >= 0.6) {
    title = "BAGUS SEKALI! 🌟";
    msg = "Kamu hebat! Terus belajar dan kamu bisa lebih baik lagi!";
    stars = "⭐⭐";
    playCorrectSound();
    spawnConfetti(60);
  } else {
    title = "TERUS SEMANGAT! 💪";
    msg = "Latihan terus ya! Semakin banyak belajar, semakin pintar!";
    stars = "⭐";
    playTone(440, "sine", 0.5, 0.2);
  }

  document.getElementById("resultTitle").textContent = title;
  document.getElementById("resultScore").textContent = score;
  document.getElementById("resultMsg").textContent = msg;
  document.getElementById("resultStars").textContent = stars;
}

function repeatCategory() {
  playClickSound();
  startQuiz(currentCategory);
}
