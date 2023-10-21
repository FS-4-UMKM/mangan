function showHowPay() {
  let howsPay = document.querySelector("#hows-pay");
  howsPay.classList.toggle("hidden");
}
function redirectToNewPage() {
  window.location.href = '/pages/jalil-payment-failed/payment-failed.html';
}

function redirectToConfirmPage() {
  window.location.href = '/pages/jalil-payment-sukses/payment-sukses.html';
}


// mendapatkan data dari form checkout
document.getElementById("nama-penerima").textContent = localStorage.getItem("name");
document.getElementById("jumlah-porsi").textContent = localStorage.getItem("porsi");
document.getElementById("tgl-acara").textContent = localStorage.getItem("date");
document.getElementById("metode-pembayaran").textContent = localStorage.getItem("payment");
document.getElementById("alamat-penerima").textContent = localStorage.getItem("address");
document.getElementById("catatan").textContent = localStorage.getItem("note");
document.getElementById("tgl-pemesanan").textContent = localStorage.getItem("hari");
document.getElementById("nomor-pesanan").textContent = localStorage.getItem("code");


// untuk mendapatkan tanggal deadline pembayaran
const date = new Date();
const deadline = new Date(date);
deadline.setDate(date.getDate() + 1)

const deadlinePayment = new Intl.DateTimeFormat("id-ID", {
  dateStyle: "full",
  timeStyle: "short"
}).format(deadline);
document.getElementById("deadline-payment").textContent = deadlinePayment;