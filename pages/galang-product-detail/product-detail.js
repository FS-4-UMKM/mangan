// get id
let urlParams = new URLSearchParams(window.location.search);
let idProduct = urlParams.get("id");

function back() {
  window.history.back();
}
// Carousell
function loadCarousell() {
  let main = new Splide("#main-carousel", {
    type: "fade",
    rewind: true,
    pagination: false,
    arrows: false,
  });

  let thumbnails = new Splide("#thumbnail-carousel", {
    fixedWidth: 150,
    fixedHeight: 80,
    gap: 10,
    rewind: true,
    pagination: false,
    isNavigation: true,
    breakpoints: {
      640: {
        fixedWidth: 100,
        fixedHeight: 60,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
}

function showKategori() {
  let downIcon = document.querySelector("#down-icon-menu");
  let downContents = document.querySelector("#menu-contents");
  downIcon.classList.toggle("rotate-180");
  downContents.classList.toggle("hidden");
}
function getItemIdKategori() {
  let downContents = document.querySelector("#menu-contents");
  let downIcon = document.querySelector("#down-icon-menu");
  let items = document.querySelectorAll(".items-menu");
  let selectedItem = document.querySelector("#selected-menu");
  items.forEach(function (item) {
    item.addEventListener("click", function (event) {
      downContents.classList.add("hidden");
      downIcon.classList.remove("rotate-180");
      // let id = event.target.id;
      let value = this.textContent;
      selectedItem.textContent = value;
    });
  });
  console.log(items.length);
}

// Get Data API
async function getDataMenu() {
  try {
    const mainCourasell = document.querySelector(".splide-main");
    const thumbnailCourasell = document.querySelector(".splide-thumbnail");

    const packageName = document.querySelector("#package-name");
    const sellerName = document.querySelector("#seller-name");
    const menuPrice = document.querySelector("#menu-price");
    const packageRating = document.querySelector("#package-rating");
    const packageSold = document.querySelector("#package-sold");
    const dropdownMenu = document.querySelector("#menu-contents");
    const listMenu = document.querySelector("#list-menu");

    let paketUrl = `https://652508a767cfb1e59ce6758b.mockapi.io/products/${idProduct}`;
    let paketRes = await fetch(paketUrl);
    let paket = await paketRes.json();
    packageName.textContent = paket.namaPaket;
    packageRating.textContent = paket.ratingPaket;
    packageSold.textContent = `${paket.paketTerjual} Terjual`;
    let mainImgCarousell = `
    <li class="splide__slide slide-main">
      <img src="${paket.gambarPaket}"
          alt="">
    </li>
    `;
    let thumbImgCarousell = `
    <li class="splide__slide">
      <img src="${paket.gambarPaket}"
          alt="">
    </li>
    `;
    mainCourasell.innerHTML += mainImgCarousell;
    thumbnailCourasell.innerHTML += thumbImgCarousell;

    let menuUrl = `https://652508a767cfb1e59ce6758b.mockapi.io/products/${idProduct}/menu`;
    let menuRes = await fetch(menuUrl);
    let menu = await menuRes.json();
    console.log(paket);
    console.log(menu);
    menu.map((item, index) => {
      // Menghitung harga terendah
      let minPrice = Math.min(...menu.map((item) => item.hargaMenu));
      // Menghitung harga tertinggi
      let maxPrice = Math.max(...menu.map((item) => item.hargaMenu));
      sellerName.textContent = item.namaSeller;
      menuPrice.textContent = `Rp${minPrice.toLocaleString(
        "id-ID"
      )} - Rp${maxPrice.toLocaleString("id-ID")}`;

      let mainImgCarousell = `
      <li class="splide__slide slide-main">
        <img src="${item.gambarMenu}"
            alt="">
      </li>
      `;
      let thumbImgCarousell = `
      <li class="splide__slide">
        <img src="${item.gambarMenu}"
            alt="">
      </li>
      `;
      let downMenu = `
      <div id="${index + 1}"
          class="items-menu text-[#de283b] px-3 py-2 cursor-pointer hover:bg-slate-200 select-none">${
            item.namaMenu
          }</div>
      `;
      dropdownMenu.innerHTML += downMenu;
      mainCourasell.innerHTML += mainImgCarousell;
      thumbnailCourasell.innerHTML += thumbImgCarousell;
    });
    setMenu(menu);
    getItemIdKategori();
    document.querySelector("#loading").classList.add("hidden");
    document.querySelector("#page-container").classList.remove("hidden");
    loadCarousell();
  } catch (error) {
    console.log(error);
  }
}
getDataMenu();

async function setMenu(menu) {
  let items = document.querySelectorAll(".items-menu");
  let listMenu = document.querySelector("#list-menu");
  let price = document.querySelector("#menu-price");
  items.forEach(function (item) {
    item.addEventListener("click", function (event) {
      // downContents.classList.add("hidden");
      // downIcon.classList.remove("rotate-180");
      listMenu.innerHTML = "";
      let id = event.target.id;
      let menuSelected = menu[id - 1].isiMenu;
      console.log(menuSelected);
      price.textContent = `Rp${menu[id - 1].hargaMenu.toLocaleString("id-ID")}`;
      menuSelected.map((item, index) => {
        let list = `
          <li class="list-menu">${item}</li>
          `;
        listMenu.innerHTML += list;
      });
    });
  });
}
