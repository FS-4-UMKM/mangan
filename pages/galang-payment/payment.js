function showHowPay() {
  let howsPay = document.querySelector("#hows-pay");
  howsPay.classList.toggle("hidden");
}
function redirectToNewPage() {
  window.location.href = '/pages/jalil-payment-failed/payment-failed.html';
}


document.addEventListener("DOMContentLoaded", function () {
  let data = window.location.search;
  let params = new URLSearchParams(data);

  let nama = params.get("name");
  document.getElementById("nama-penerima").textContent = nama;

  let porsi = params.get("porsi");
  document.getElementById("jumlah-porsi").textContent = porsi;

  let date = params.get("date");
  document.getElementById("tgl-acara").textContent = date;

  let payment = params.get("payment");
  document.getElementById("metode-pembayaran").textContent = payment;

  let addres = params.get("addres");
  document.getElementById("catatan").textContent = addres;

  let address = params.get("address");
  document.getElementById("alamat-penerima").textContent = address;
})