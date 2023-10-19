
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-icon");

// function untuk focus ke input pencarian
searchButton.addEventListener("click", function () {
    searchInput.focus();
});


// Path: pages/jalil-checkout/checkout.js
const btnCheckout = document.getElementById("btn-checkout");
const btnBatal = document.getElementById("btn-batal");
const btnAgree = document.getElementById("btn-agree");

btnCheckout.addEventListener("click", function () {
    modal.style.display = "block";
});

btnBatal.addEventListener("click", function () {
    modal.style.display = "none";
});

function redirectToNewPage() {
    window.location.href = '/pages/galang-payment/payment.html';
}

console.log(redirectToNewPage);

