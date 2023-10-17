// Ambil elemen-elemen HTML yang diperlukan
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-icon");

// Tambahkan event listener ke tombol pencarian
searchButton.addEventListener("click", function () {
    // Fokuskan kursor ke input pencarian
    searchInput.focus();
});