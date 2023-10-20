function showHowPay() {
  let howsPay = document.querySelector("#hows-pay");
  howsPay.classList.toggle("hidden");
}
function redirectToNewPage() {
  window.location.href = '/pages/jalil-payment-failed/payment-failed.html';
}


const nameValue = localStorage.getItem("name");
const porsiValue = localStorage.getItem("porsi");
const dateValue = localStorage.getItem("date");
const paymentValue = localStorage.getItem("payment");
const addressValue = localStorage.getItem("address");
const noteValue = localStorage.getItem("note");


document.getElementById("nama-penerima").textContent = nameValue;
document.getElementById("jumlah-porsi").textContent = porsiValue;
document.getElementById("tgl-acara").textContent = dateValue;
document.getElementById("metode-pembayaran").textContent = paymentValue;
document.getElementById("alamat-penerima").textContent = addressValue;
document.getElementById("catatan").textContent = noteValue;
