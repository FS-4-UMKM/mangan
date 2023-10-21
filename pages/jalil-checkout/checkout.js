const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-icon");

// function untuk focus ke input pencarian
searchButton.addEventListener("click", function () {
  searchInput.focus();
});

const btnCheckout = document.getElementById("btn-checkout");
const btnBatal = document.getElementById("btn-batal");
const btnAgree = document.getElementById("btn-agree");
// function untuk menampilkan modal
btnCheckout.addEventListener("click", function () {
  modal.style.display = "block";
});
// function untuk menutup modal
btnBatal.addEventListener("click", function () {
  modal.style.display = "none";
});

function redirectToNewPageWith() {
  window.location.href = "/pages/jalil-payment-proses/payment-proses.html";
}

let form = document.getElementById("checkout-form");
let nama = document.getElementById("input-name");
let porsi = document.getElementById("input-porsi");
let date = document.getElementById("input-date");
let payment = document.getElementById("input-payment");
let address = document.getElementById("input-address");
let note = document.getElementById("input-note");
let namaPaket = document.querySelector("#nama-paket");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameValue = nama.value;
  const porsiValue = porsi.value;
  const dateValue = date.value;
  const paymentValue = payment.value;
  const addressValue = address.value;
  const noteValue = note.value;
  const namaPaketValue = namaPaket.textContent;

  localStorage.setItem("name", nameValue);
  localStorage.setItem("porsi", porsiValue);
  localStorage.setItem("date", dateValue);
  localStorage.setItem("payment", paymentValue);
  localStorage.setItem("address", addressValue);
  localStorage.setItem("note", noteValue);
  localStorage.setItem("namapaket", namaPaketValue);

  const tanggal = new Date();

  const hari = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "full",
  }).format(tanggal);

  localStorage.setItem("hari", hari);

  Window.location.href = "/pages/galang-payment/payment.html";
  Window.location.href = "/pages/jalil-payment-failed/payment-failed.html";
  Window.location.href = "/pages/jalil-payment-proses/payment-proses.html";
});

// Mengambil data melalui URL Params
let urlParams = new URLSearchParams(window.location.search);
// Mengambil nilai idProduk dari query string
let id = urlParams.get("id");
// Mengambil nilai idMenu dari query string
let menu = urlParams.get("menu");
// Menggunakan nilai yang telah diambil
console.log("idProduk: " + id);
console.log("idMenu: " + menu);

async function getDataPaket() {
  let urlApi = `https://652508a767cfb1e59ce6758b.mockapi.io/products/${id}`;
  let response = await fetch(urlApi);
  let paket = await response.json();
  return paket.namaPaket;
}

async function getDataProduct() {
  let urlApi = `https://652508a767cfb1e59ce6758b.mockapi.io/products/${id}/menu?search=${menu}`;
  let response = await fetch(urlApi);
  let selectedMenu = await response.json();
  console.log(selectedMenu);
  console.log(selectedMenu[0].namaMenu);

  // Elemen HTML Detail Paket
  const namaPaket = document.querySelector("#nama-paket");
  const namaMenu = document.querySelector("#nama-menu");
  const listMenu = document.querySelector("#list-menu");
  listMenu.innerHTML = " ";
  const harga = document.querySelector("#harga");
  const imgMenu = document.querySelector("#img-menu");
  const totalHarga = document.querySelector("#text-price");

  // Set Elemen HTML Dari Data Yg diambil Dari API
  namaPaket.textContent = await getDataPaket();

  namaMenu.textContent = `${selectedMenu[0].namaMenu}`;
  selectedMenu[0].isiMenu.map((item) => {
    listMenu.innerHTML += `
    <li>${item}</li>
    `;
  });
  harga.textContent = `Rp${selectedMenu[0].hargaMenu.toLocaleString(
    "id-ID"
  )}/Porsi`;
  imgMenu.innerHTML = `
  <div class="w-full aspect-square rounded-[10px] bg-[url('${selectedMenu[0].gambarMenu}')] bg-cover bg-center"></div>
  `;

  //   Set Total harga by input porsi onchange
  const inputPorsi = document.querySelector("#input-porsi");
  inputPorsi.addEventListener("change", function (event) {
    // Aksi atau fungsi yang akan dijalankan saat nilai input berubah
    let totalPorsi = event.target.value;
    let hargaMenu = selectedMenu[0].hargaMenu;
    let total = hargaMenu * totalPorsi;
    console.log("total harga : Rp" + total.toLocaleString("id-ID"));
    totalHarga.textContent = `Rp${total.toLocaleString("id-ID")}`;
    localStorage.setItem("totalprice", `Rp${total.toLocaleString("id-ID")}`);
  });
}
getDataProduct();

let code = self.crypto.randomUUID().substring(0, 10);
localStorage.setItem("code", code);

function redirectToNewPage() {
  window.location.href = `/pages/galang-payment/payment.html?id=${id}&menu=${menu}`;
}
