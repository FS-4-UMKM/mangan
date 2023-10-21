
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

function redirectToNewPage() {
    window.location.href = '/pages/galang-payment/payment.html';
}

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


form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameValue = nama.value;
    const porsiValue = porsi.value;
    const dateValue = date.value;
    const paymentValue = payment.value;
    const addressValue = address.value;
    const noteValue = note.value;

    localStorage.setItem("name", nameValue);
    localStorage.setItem("porsi", porsiValue);
    localStorage.setItem("date", dateValue);
    localStorage.setItem("payment", paymentValue);
    localStorage.setItem("address", addressValue);
    localStorage.setItem("note", noteValue);

    const tanggal = new Date();

    const hari = new Intl.DateTimeFormat("id-ID", {
        dateStyle: "full",
    }).format(tanggal);

    localStorage.setItem("hari", hari);



    Window.location.href = "/pages/galang-payment/payment.html";
    Window.location.href = "/pages/jalil-payment-failed/payment-failed.html";
    Window.location.href = "/pages/jalil-payment-proses/payment-proses.html";
});


let code = self.crypto.randomUUID().substring(0, 10);
localStorage.setItem("code", code);

