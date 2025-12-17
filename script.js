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

  // --- FITUR API FETCH ---
  async function getQuote() {
    // 1. Tangkap elemen HTML
    const textElement = document.getElementById("quote-text");
    const authorElement = document.getElementById("quote-author");

    try {
      // 2. Panggil API (Request)
      const response = await fetch("https://dummyjson.com/quotes/random");

      // 3. Ubah jawaban server (JSON) menjadi Object JS
      const data = await response.json();

      // 4. Tampilkan ke layar
      textElement.innerText = `"${data.quote}"`;
      authorElement.innerText = `- ${data.author}`;
    } catch (error) {
      // 5. Penanganan Error (jika internet mati / server down)
      textElement.innerText = "Gagal mengambil kutipan. Cek koneksi internet.";
      console.error("Error fetching quote:", error);
    }
  }

  // Jalankan fungsi saat halaman selesai dimuat
  getQuote();
});
