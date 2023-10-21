function redirectToNewPage() {
    window.location.href = '/index.html';
}

function redirectToPageConfirm() {
    window.location.href = '/pages/jalil-payment-sukses/payment-sukses.html';
}

document.getElementById("nama-penerima").textContent = localStorage.getItem("name");
document.getElementById("jumlah-porsi").textContent = localStorage.getItem("porsi");
document.getElementById("tgl-acara").textContent = localStorage.getItem("date");
document.getElementById("metode-pembayaran").textContent = localStorage.getItem("payment");
document.getElementById("alamat-penerima").textContent = localStorage.getItem("address");
document.getElementById("catatan").textContent = localStorage.getItem("note");
document.getElementById("tgl-pemesanan").textContent = localStorage.getItem("hari");