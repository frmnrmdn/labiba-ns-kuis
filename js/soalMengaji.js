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
        // arabic: "ا",
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
