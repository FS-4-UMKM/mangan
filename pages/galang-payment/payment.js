function showHowPay() {
  let howsPay = document.querySelector("#hows-pay");
  howsPay.classList.toggle("hidden");
}
function redirectToNewPage() {
  window.location.href = "/pages/jalil-payment-failed/payment-failed.html";
}

// mendapatkan data dari form checkout
document.getElementById("nama-penerima").textContent =
  localStorage.getItem("name");
document.getElementById("jumlah-porsi").textContent =
  localStorage.getItem("porsi");
document.getElementById("tgl-acara").textContent = localStorage.getItem("date");
document.getElementById("metode-pembayaran").textContent =
  localStorage.getItem("payment");
document.getElementById("alamat-penerima").textContent =
  localStorage.getItem("address");
document.getElementById("catatan").textContent = localStorage.getItem("note");
document.getElementById("tgl-pemesanan").textContent =
  localStorage.getItem("hari");
document.getElementById("nomor-pesanan").textContent =
  localStorage.getItem("code");
document.getElementById("total-pembayaran").textContent =
  localStorage.getItem("totalprice");
document.getElementById("nama-paket").textContent =
  localStorage.getItem("namapaket");

// untuk mendapatkan tanggal deadline pembayaran
const date = new Date();
const deadline = new Date(date);
deadline.setDate(date.getDate() + 1);

const deadlinePayment = new Intl.DateTimeFormat("id-ID", {
  dateStyle: "full",
  timeStyle: "short",
}).format(deadline);
document.getElementById("deadline-payment").textContent = deadlinePayment;

// Mengambil data melalui URL Params
let urlParams = new URLSearchParams(window.location.search);
// Mengambil nilai idProduk dari query string
let id = urlParams.get("id");
// Mengambil nilai idMenu dari query string
let menu = urlParams.get("menu");
// Menggunakan nilai yang telah diambil
console.log("idProduk: " + id);
console.log("idMenu: " + menu);

async function getDataMenu() {
  let urlApi = `https://652508a767cfb1e59ce6758b.mockapi.io/products/${id}/menu?search=${menu}`;
  let response = await fetch(urlApi);
  let selectedMenu = await response.json();

  document.querySelector("#nama-menu").textContent = selectedMenu[0].namaMenu;
  document.querySelector("#harga-menu").textContent = `Rp${selectedMenu[0].hargaMenu.toLocaleString("id-ID")}/Porsi`;
  document.querySelector("#nama-menu-deskripsi").textContent = `${selectedMenu[0].namaMenu} :`;
  document.querySelector("#deskripsi-menu").innerHTML = " ";
  document.querySelector("#img-menu").classList.replace("bg-[url('/assets/images/card-image.jpg')]", `bg-[url('${selectedMenu[0].gambarMenu}')]`)

  selectedMenu[0].isiMenu.map((item) => {
    document.querySelector("#deskripsi-menu").innerHTML += `<li>${item}</>`;
  })

}
getDataMenu();

function redirectToConfirmPage() {
  window.location.href = `/pages/jalil-payment-sukses/payment-sukses.html?id=${id}&menu=${menu}`;
}
