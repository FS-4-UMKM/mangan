// function redirectToNewPage() {
//     window.location.href = '/index.html';
// }

const btnCheckout = document.getElementById("btn-checkout");
const btnBatal = document.getElementById("btn-batal");
const btnAgree = document.getElementById("btn-agree");
// function untuk menampilkan modal
btnAgree.addEventListener("click", function () {
    modal.style.display = "none";
});
// function untuk menutup modal
btnBatal.addEventListener("click", function () {
    window.location.href = '/pages/galang-payment/payment.html';
});



document.getElementById("nama-penerima").textContent = localStorage.getItem("name");
document.getElementById("jumlah-porsi").textContent = localStorage.getItem("porsi");
document.getElementById("tgl-acara").textContent = localStorage.getItem("date");
document.getElementById("metode-pembayaran").textContent = localStorage.getItem("payment");
document.getElementById("alamat-penerima").textContent = localStorage.getItem("address");
document.getElementById("catatan").textContent = localStorage.getItem("note");
document.getElementById("tgl-pemesanan").textContent = localStorage.getItem("hari");
document.getElementById("nomor-pesanan").textContent = localStorage.getItem("code");

