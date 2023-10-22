function redirectToNewPage() {
    window.location.href = '/index.html';
}

const btnCheckout = document.getElementById("btn-checkout");
const btnBatal = document.getElementById("btn-batal");
const btnAgree = document.getElementById("btn-agree");
// function untuk menampilkan modal
btnAgree.addEventListener("click", function () {
    modal.style.display = "none";
});
// function untuk menutup modal
btnBatal.addEventListener("click", function () {
    window.history.back();
});



document.getElementById("nama-penerima").textContent = localStorage.getItem("name");
document.getElementById("jumlah-porsi").textContent = localStorage.getItem("porsi");
document.getElementById("tgl-acara").textContent = localStorage.getItem("date");
document.getElementById("metode-pembayaran").textContent = localStorage.getItem("payment");
document.getElementById("alamat-penerima").textContent = localStorage.getItem("address");
document.getElementById("catatan").textContent = localStorage.getItem("note");
document.getElementById("tgl-pemesanan").textContent = localStorage.getItem("hari");
document.getElementById("nomor-pesanan").textContent = localStorage.getItem("code");
document.getElementById("total-price").textContent = localStorage.getItem("totalprice");
document.getElementById("title-order").textContent = localStorage.getItem("namapaket");

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

    document.querySelector("#menu").textContent = selectedMenu[0].namaMenu;
    document.querySelector("#price-failed").textContent = `Rp${selectedMenu[0].hargaMenu.toLocaleString("id-ID")}/Porsi`;
    document.querySelector("#isi-menu-failed").textContent = `Isi ${selectedMenu[0].namaMenu} :`;
    document.querySelector("#list-menu-failed").innerHTML = " ";
    document.querySelector("#img-menu").src = selectedMenu[0].gambarMenu;

    selectedMenu[0].isiMenu.map((item) => {
        document.querySelector("#list-menu-failed").innerHTML += `<li>${item}</>`;
    })

}
getDataMenu();

