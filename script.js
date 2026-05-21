// Data soal Calistung
const CATEGORIES = [
  {
    id: "warna",
    label: "Tebak Warna",
    icon: "🎨",
    count: 5,
    questions: [
      {
        q: "Warna apa ini? 🔴",
        img: "🔴",
        type: "Tebak Warna",
        options: [
          { label: "Merah", icon: "🔴" },
          { label: "Biru", icon: "🔵" },
          { label: "Hijau", icon: "🟢" },
          { label: "Kuning", icon: "🟡" },
        ],
        correct: 0,
        hint: "Warna apel dan tomat!",
      },
      {
        q: "Warna apa ini? 🟡",
        img: "🟡",
        type: "Tebak Warna",
        options: [
          { label: "Ungu", icon: "🟣" },
          { label: "Kuning", icon: "🟡" },
          { label: "Oranye", icon: "🟠" },
          { label: "Putih", icon: "⚪" },
        ],
        correct: 1,
        hint: "Warna matahari dan pisang!",
      },
      {
        q: "Warna apa ini? 🔵",
        img: "🔵",
        type: "Tebak Warna",
        options: [
          { label: "Merah", icon: "🔴" },
          { label: "Hijau", icon: "🟢" },
          { label: "Biru", icon: "🔵" },
          { label: "Coklat", icon: "🟤" },
        ],
        correct: 2,
        hint: "Warna langit dan laut!",
      },
      {
        q: "Warna apa ini? 🟢",
        img: "🟢",
        type: "Tebak Warna",
        options: [
          { label: "Merah", icon: "🔴" },
          { label: "Hijau", icon: "🟢" },
          { label: "Biru", icon: "🔵" },
          { label: "Kuning", icon: "🟡" },
        ],
        correct: 1,
        hint: "Warna pohon dan rumput!",
      },
      {
        q: "Warna apa ini? 🟠",
        img: "🟠",
        type: "Tebak Warna",
        options: [
          { label: "Oranye", icon: "🟠" },
          { label: "Merah", icon: "🔴" },
          { label: "Hijau", icon: "🟢" },
          { label: "Ungu", icon: "🟣" },
        ],
        correct: 0,
        hint: "Warna jeruk manis!",
      },
    ],
  },
  {
    id: "bentuk",
    label: "Tebak Bentuk",
    icon: "🔷",
    count: 5,
    questions: [
      {
        q: "Bentuk apakah ini?",
        img: "⭕",
        type: "Tebak Bentuk",
        options: [
          { label: "Lingkaran", icon: "⭕" },
          { label: "Kotak", icon: "🟥" },
          { label: "Segitiga", icon: "🔺" },
          { label: "Bintang", icon: "⭐" },
        ],
        correct: 0,
        hint: "Tidak ada sudut, bulat sempurna!",
      },
      {
        q: "Bentuk apakah ini?",
        img: "🟥",
        type: "Tebak Bentuk",
        options: [
          { label: "Lingkaran", icon: "⭕" },
          { label: "Persegi", icon: "🟥" },
          { label: "Segitiga", icon: "🔺" },
          { label: "Berlian", icon: "🔷" },
        ],
        correct: 1,
        hint: "Mempunyai 4 sisi yang sama panjang!",
      },
      {
        q: "Bentuk apakah ini?",
        img: "🔺",
        type: "Tebak Bentuk",
        options: [
          { label: "Oval", icon: "🥚" },
          { label: "Kotak", icon: "🟥" },
          { label: "Segitiga", icon: "🔺" },
          { label: "Persegi Panjang", icon: "▬" },
        ],
        correct: 2,
        hint: "Mempunyai 3 sudut!",
      },
      {
        q: "Bentuk apakah ini?",
        img: "⭐",
        type: "Tebak Bentuk",
        options: [
          { label: "Bunga", icon: "🌸" },
          { label: "Bintang", icon: "⭐" },
          { label: "Matahari", icon: "☀️" },
          { label: "Berlian", icon: "🔷" },
        ],
        correct: 1,
        hint: "Sering kita lihat di langit malam!",
      },
      {
        q: "Bentuk apakah ini?",
        img: "🔷",
        type: "Tebak Bentuk",
        options: [
          { label: "Lingkaran", icon: "⭕" },
          { label: "Segitiga", icon: "🔺" },
          { label: "Berlian", icon: "🔷" },
          { label: "Persegi", icon: "🟥" },
        ],
        correct: 2,
        hint: "Seperti batu permata berharga!",
      },
    ],
  },
  {
    id: "hewan",
    label: "Mengenal Hewan",
    icon: "🐾",
    count: 5,
    questions: [
      {
        q: "Hewan apa ini?",
        img: "🐘",
        type: "Mengenal Hewan",
        options: [
          { label: "Singa", icon: "🦁" },
          { label: "Gajah", icon: "🐘" },
          { label: "Kuda", icon: "🐴" },
          { label: "Sapi", icon: "🐄" },
        ],
        correct: 1,
        hint: "Hewan terbesar di darat, punya belalai panjang!",
      },
      {
        q: "Hewan apa ini?",
        img: "🦁",
        type: "Mengenal Hewan",
        options: [
          { label: "Macan", icon: "🐯" },
          { label: "Kucing", icon: "🐱" },
          { label: "Singa", icon: "🦁" },
          { label: "Serigala", icon: "🐺" },
        ],
        correct: 2,
        hint: "Raja hutan yang gagah!",
      },
      {
        q: "Hewan apa ini?",
        img: "🐧",
        type: "Mengenal Hewan",
        options: [
          { label: "Burung", icon: "🐦" },
          { label: "Bebek", icon: "🦆" },
          { label: "Ayam", icon: "🐔" },
          { label: "Penguin", icon: "🐧" },
        ],
        correct: 3,
        hint: "Hidup di salju dan tidak bisa terbang!",
      },
      {
        q: "Hewan apa ini?",
        img: "🐬",
        type: "Mengenal Hewan",
        options: [
          { label: "Ikan", icon: "🐟" },
          { label: "Hiu", icon: "🦈" },
          { label: "Lumba-lumba", icon: "🐬" },
          { label: "Paus", icon: "🐋" },
        ],
        correct: 2,
        hint: "Hewan laut yang pintar dan suka melompat!",
      },
      {
        q: "Hewan apa ini?",
        img: "🦋",
        type: "Mengenal Hewan",
        options: [
          { label: "Lebah", icon: "🐝" },
          { label: "Lalat", icon: "🪰" },
          { label: "Kupu-kupu", icon: "🦋" },
          { label: "Belalang", icon: "🦗" },
        ],
        correct: 2,
        hint: "Muncul dari kepompong, sayapnya indah!",
      },
    ],
  },
  {
    id: "buah",
    label: "Mengenal Buah",
    icon: "🍎",
    count: 5,
    questions: [
      {
        q: "Buah apa ini?",
        img: "🍎",
        type: "Mengenal Buah",
        options: [
          { label: "Apel", icon: "🍎" },
          { label: "Tomat", icon: "🍅" },
          { label: "Stroberi", icon: "🍓" },
          { label: "Ceri", icon: "🍒" },
        ],
        correct: 0,
        hint: "Buah merah yang renyah!",
      },
      {
        q: "Buah apa ini?",
        img: "🍌",
        type: "Mengenal Buah",
        options: [
          { label: "Mangga", icon: "🥭" },
          { label: "Pisang", icon: "🍌" },
          { label: "Pepaya", icon: "🍈" },
          { label: "Nanas", icon: "🍍" },
        ],
        correct: 1,
        hint: "Monyet suka makan buah ini, berwarna kuning!",
      },
      {
        q: "Buah apa ini?",
        img: "🍇",
        type: "Mengenal Buah",
        options: [
          { label: "Bluberi", icon: "🫐" },
          { label: "Anggur", icon: "🍇" },
          { label: "Plum", icon: "🫒" },
          { label: "Ceri", icon: "🍒" },
        ],
        correct: 1,
        hint: "Buah ungu yang tumbuh berkelompok!",
      },
      {
        q: "Buah apa ini?",
        img: "🍉",
        type: "Mengenal Buah",
        options: [
          { label: "Melon", icon: "🍈" },
          { label: "Semangka", icon: "🍉" },
          { label: "Alpukat", icon: "🥑" },
          { label: "Jeruk", icon: "🍊" },
        ],
        correct: 1,
        hint: "Hijau di luar, merah di dalam, banyak airnya!",
      },
      {
        q: "Buah apa ini?",
        img: "🍍",
        type: "Mengenal Buah",
        options: [
          { label: "Durian", icon: "🌵" },
          { label: "Mangga", icon: "🥭" },
          { label: "Nanas", icon: "🍍" },
          { label: "Kelapa", icon: "🥥" },
        ],
        correct: 2,
        hint: "Buah berduri dengan mahkota daun di atas!",
      },
    ],
  },
  {
    id: "huruf",
    label: "Huruf & Angka",
    icon: "🔤",
    count: 5,
    questions: [
      {
        q: "Huruf apakah ini?",
        img: "🅰️",
        type: "Huruf & Angka",
        options: [
          { label: "A" },
          { label: "B" },
          { label: "C" },
          { label: "D" },
        ],
        correct: 0,
        hint: "Huruf pertama dalam alfabet!",
      },
      {
        q: "Angka berapa ini?",
        img: "5️⃣",
        type: "Huruf & Angka",
        options: [
          { label: "3" },
          { label: "7" },
          { label: "5" },
          { label: "8" },
        ],
        correct: 2,
        hint: "Jari tangan kita ada 5!",
      },
      {
        q: "Huruf apakah ini?",
        img: "🅱️",
        type: "Huruf & Angka",
        options: [
          { label: "P" },
          { label: "B" },
          { label: "D" },
          { label: "R" },
        ],
        correct: 1,
        hint: "Bola namanya diawali huruf ini!",
      },
      {
        q: "Angka berapa ini?",
        img: "🔟",
        type: "Huruf & Angka",
        options: [
          { label: "8" },
          { label: "9" },
          { label: "10" },
          { label: "6" },
        ],
        correct: 2,
        hint: "Jari tangan kiri + kanan = ?",
      },
      {
        q: 'Huruf apa yang bunyi "Ka"?',
        img: "🔤",
        type: "Huruf & Angka",
        options: [
          { label: "G" },
          { label: "K" },
          { label: "C" },
          { label: "Q" },
        ],
        correct: 1,
        hint: "Kucing diawali bunyi ini!",
      },
    ],
  },
  {
    id: "hitung",
    label: "Hitung Benda",
    icon: "🔢",
    count: 5,
    questions: [
      {
        q: "Ada berapa bintang?",
        img: "⭐⭐⭐",
        type: "Hitung Benda",
        options: [
          { label: "2" },
          { label: "3" },
          { label: "4" },
          { label: "5" },
        ],
        correct: 1,
        hint: "Hitunglah satu per satu!",
      },
      {
        q: "Ada berapa apel?",
        img: "🍎🍎🍎🍎🍎",
        type: "Hitung Benda",
        options: [
          { label: "3" },
          { label: "4" },
          { label: "5" },
          { label: "6" },
        ],
        correct: 2,
        hint: "Jari tanganmu satu tangan!",
      },
      {
        q: "Ada berapa balon?",
        img: "🎈🎈",
        type: "Hitung Benda",
        options: [
          { label: "1" },
          { label: "2" },
          { label: "3" },
          { label: "4" },
        ],
        correct: 1,
        hint: "Hitunglah dengan pelan!",
      },
      {
        q: "Ada berapa kupu-kupu?",
        img: "🦋🦋🦋🦋",
        type: "Hitung Benda",
        options: [
          { label: "2" },
          { label: "3" },
          { label: "4" },
          { label: "5" },
        ],
        correct: 2,
        hint: "Hitunglah gambarnya!",
      },
      {
        q: "Ada berapa ikan?",
        img: "🐟🐟🐟🐟🐟🐟",
        type: "Hitung Benda",
        options: [
          { label: "4" },
          { label: "5" },
          { label: "6" },
          { label: "7" },
        ],
        correct: 2,
        hint: "Enam = setengah dari dua belas!",
      },
    ],
  },
  {
    id: "matematika",
    label: "Penjumlahan",
    icon: "➕",
    count: 5,
    questions: [
      {
        q: "1 + 1 = ?",
        img: "🍎 + 🍎",
        type: "Matematika",
        options: [
          { label: "1" },
          { label: "2" },
          { label: "3" },
          { label: "4" },
        ],
        correct: 1,
        hint: "Satu apel ditambah satu apel!",
      },
      {
        q: "2 + 2 = ?",
        img: "🐣🐣 + 🐣🐣",
        type: "Matematika",
        options: [
          { label: "3" },
          { label: "4" },
          { label: "5" },
          { label: "6" },
        ],
        correct: 1,
        hint: "Gunakan jari tanganmu untuk menghitung!",
      },
      {
        q: "3 + 1 = ?",
        img: "⭐⭐⭐ + ⭐",
        type: "Matematika",
        options: [
          { label: "3" },
          { label: "5" },
          { label: "4" },
          { label: "6" },
        ],
        correct: 2,
        hint: "Tiga bintang ditambah satu bintang!",
      },
      {
        q: "2 + 3 = ?",
        img: "🐟🐟 + 🐟🐟🐟",
        type: "Matematika",
        options: [
          { label: "4" },
          { label: "6" },
          { label: "5" },
          { label: "7" },
        ],
        correct: 2,
        hint: "Dua ikan ditambah tiga ikan!",
      },
      {
        q: "4 + 1 = ?",
        img: "🌸🌸🌸🌸 + 🌸",
        type: "Matematika",
        options: [
          { label: "4" },
          { label: "5" },
          { label: "6" },
          { label: "3" },
        ],
        correct: 1,
        hint: "Empat bunga ditambah satu bunga!",
      },
    ],
  },
  {
    id: "pengurangan",
    label: "Pengurangan",
    icon: "➖",
    count: 5,
    questions: [
      {
        q: "3 - 1 = ?",
        img: "🍎🍎🍎 - 🍎",
        type: "Matematika",
        options: [
          { label: "1" },
          { label: "2" },
          { label: "3" },
          { label: "4" },
        ],
        correct: 1,
        hint: "Tiga dikurangi satu!",
      },
      {
        q: "4 - 2 = ?",
        img: "🌟🌟🌟🌟 - 🌟🌟",
        type: "Matematika",
        options: [
          { label: "1" },
          { label: "2" },
          { label: "3" },
          { label: "4" },
        ],
        correct: 1,
        hint: "Empat bintang dikurangi dua bintang!",
      },
      {
        q: "5 - 3 = ?",
        img: "🐥🐥🐥🐥🐥 - 🐥🐥🐥",
        type: "Matematika",
        options: [
          { label: "1" },
          { label: "2" },
          { label: "3" },
          { label: "4" },
        ],
        correct: 1,
        hint: "Lima dikurangi tiga!",
      },
      {
        q: "3 - 2 = ?",
        img: "🍓🍓🍓 - 🍓🍓",
        type: "Matematika",
        options: [
          { label: "1" },
          { label: "2" },
          { label: "3" },
          { label: "0" },
        ],
        correct: 0,
        hint: "Tiga dikurangi dua tersisa?",
      },
      {
        q: "5 - 1 = ?",
        img: "🐠🐠🐠🐠🐠 - 🐠",
        type: "Matematika",
        options: [
          { label: "3" },
          { label: "4" },
          { label: "5" },
          { label: "6" },
        ],
        correct: 1,
        hint: "Lima ikan dikurangi satu ikan!",
      },
    ],
  },
];

// Kategori soal mengaji – 10 soal diacak dari 3 kelompok
const MENGAJI_CATEGORIES = [
  {
    id: "hijaiyah-dasar",
    label: "Hijaiyah Dasar",
    icon: "🕌",
    count: 10,
    // Semua soal tersedia, 10 akan diacak saat kuis dimulai
    questions: [
      // === KELOMPOK 1: Hijaiyah Dasar (3 soal) – mengenal bentuk huruf ===
      {
        q: "Mana huruf Alif?",
        arabic: "ا",
        type: "Hijaiyah Dasar",
        subtype: "bentuk",
        options: [
          { label: "ا", arabic: true },
          { label: "ب", arabic: true },
          { label: "ت", arabic: true },
          { label: "ث", arabic: true },
        ],
        correct: 0,
        hint: "Huruf Alif bentuknya seperti garis tegak lurus!",
      },
      {
        q: "Pilih huruf Ba!",
        arabic: "ب",
        type: "Hijaiyah Dasar",
        subtype: "bentuk",
        options: [
          { label: "ن", arabic: true },
          { label: "ب", arabic: true },
          { label: "ت", arabic: true },
          { label: "ي", arabic: true },
        ],
        correct: 1,
        hint: "Huruf Ba punya titik satu di bawah!",
      },
      {
        q: "Huruf mana yang benar untuk Jim?",
        arabic: "ج",
        type: "Hijaiyah Dasar",
        subtype: "bentuk",
        options: [
          { label: "ح", arabic: true },
          { label: "خ", arabic: true },
          { label: "ج", arabic: true },
          { label: "ع", arabic: true },
        ],
        correct: 2,
        hint: "Huruf Jim punya titik satu di dalam!",
      },

      // === KELOMPOK 2: Mengenal Huruf dari Suara (4 soal) – dengar lalu pilih ===
      {
        q: "Huruf apa yang berbunyi 'Ta'?",
        arabic: "ت",
        type: "Tebak Suara",
        subtype: "suara",
        audioLabel: "Ta",
        // huruf yang dibunyikan
        audioHuruf: "ت",
        audioFile: "audio/ta.mp3",
        options: [
          { label: "ب", arabic: true },
          { label: "ت", arabic: true },
          { label: "ث", arabic: true },
          { label: "ن", arabic: true },
        ],
        correct: 1,
        hint: "Bunyinya 'Ta' seperti awal kata Tangan!",
      },
      {
        q: "Huruf apa yang berbunyi 'Sin'?",
        arabic: "س",
        type: "Tebak Suara",
        subtype: "suara",
        audioLabel: "Sin",
        audioHuruf: "س",
        audioFile: "audio/sin.mp3",
        options: [
          { label: "ش", arabic: true },
          { label: "ص", arabic: true },
          { label: "س", arabic: true },
          { label: "ز", arabic: true },
        ],
        correct: 2,
        hint: "Sin bunyinya 'Sin' seperti awal kata Singa!",
      },
      {
        q: "Huruf apa yang berbunyi 'Mim'?",
        arabic: "م",
        type: "Tebak Suara",
        subtype: "suara",
        audioLabel: "Mim",
        audioHuruf: "م",
        audioFile: "audio/mim.mp3",
        options: [
          { label: "م", arabic: true },
          { label: "ن", arabic: true },
          { label: "و", arabic: true },
          { label: "ل", arabic: true },
        ],
        correct: 0,
        hint: "Mim bunyinya 'Mim' seperti awal kata Mama!",
      },
      {
        q: "Huruf apa yang berbunyi 'Nun'?",
        arabic: "ن",
        type: "Tebak Suara",
        subtype: "suara",
        audioLabel: "Nun",
        audioHuruf: "ن",
        audioFile: "audio/nun.mp3",
        options: [
          { label: "ي", arabic: true },
          { label: "ب", arabic: true },
          { label: "ت", arabic: true },
          { label: "ن", arabic: true },
        ],
        correct: 3,
        hint: "Nun punya titik satu di atas, bentuk seperti mangkuk!",
      },

      // === KELOMPOK 3: Soal Interaktif & Visual (3 soal) ===
      {
        // Tebak huruf yang hilang dalam urutan
        q: "Lengkapi urutan: ا – ؟ – ت",
        arabic: "ب",
        type: "Huruf Hilang",
        subtype: "urutan",
        options: [
          { label: "ج", arabic: true },
          { label: "ب", arabic: true },
          { label: "ث", arabic: true },
          { label: "د", arabic: true },
        ],
        correct: 1,
        hint: "Urutan hijaiyah: Alif – Ba – Ta!",
      },
      {
        // Cocokkan: pilih huruf yang sesuai nama
        q: "Huruf manakah yang bernama 'Lam'?",
        arabic: "ل",
        type: "Cocokkan Huruf",
        subtype: "cocokkan",
        options: [
          { label: "ك", arabic: true },
          { label: "م", arabic: true },
          { label: "ل", arabic: true },
          { label: "ن", arabic: true },
        ],
        correct: 2,
        hint: "Lam bentuknya seperti kail pancing terbalik!",
      },
      {
        // Visual – pilih huruf yang punya 3 titik di atas
        q: "Huruf mana yang punya 3 titik di atas?",
        arabic: "ث",
        type: "Soal Visual",
        subtype: "visual",
        options: [
          { label: "ب", arabic: true },
          { label: "ت", arabic: true },
          { label: "ث", arabic: true },
          { label: "ن", arabic: true },
        ],
        correct: 2,
        hint: "Cari huruf yang titiknya paling banyak di atas!",
      },
    ],
  },
];

// State aplikasi
let soundOn = true;
let currentCategory = null;
let currentQ = 0;
let score = 0;
let answered = false;

// State khusus mengaji
let currentMengajiCategory = null;
let currentMengajiQ = 0;
let scoreMengaji = 0;
let answeredMengaji = false;
let mengajiQuestions = []; // soal yang sudah diacak

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
  ["soundToggle", "soundToggle2", "soundToggle3", "soundToggle4"].forEach(
    (id) => {
      const el = document.getElementById(id);
      if (el) el.textContent = icon;
    },
  );
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

function showComingSoon(name) {
  playClickSound();
  document.getElementById("modalTitle").textContent = "Segera Hadir! 🚀";
  document.getElementById("modalBody").innerHTML =
    `Kategori <strong>${name}</strong> sedang dalam pengembangan.<br>Nantikan updatenya ya! 😊`;
  document.getElementById("modalOverlay").classList.remove("hidden");
}

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

// Acak array (Fisher-Yates)
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

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

// Pesan feedback acak
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

// ============================================================
// LOGIKA KUIS MENGAJI
// ============================================================

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
