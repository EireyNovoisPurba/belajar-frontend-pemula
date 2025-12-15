// 1. Tangkap elemen yang dibutuhkan
const body = document.body;
const themeBtn = document.getElementById("theme-btn");

// 2. Tambahkan pendengar acara (Event Listener)
themeBtn.addEventListener("click", function () {
  // Toggle class 'dark-mode' pada body
  // Artinya: kalau belum ada ditambahkan, kalau sudah ada dihapus
  body.classList.toggle("dark-mode");

  // 3. Ubah teks tombol sesuai kondisi
  if (body.classList.contains("dark-mode")) {
    themeBtn.innerText = "☀️ Mode Terang";
  } else {
    themeBtn.innerText = "🌙 Mode Gelap";
  }
});
