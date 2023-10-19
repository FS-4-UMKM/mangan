function showKota() {
  //   let btnDrop = document.querySelector("#dropdown-kota");
  let downIcon = document.querySelector("#down-icon-kota");
  let downContents = document.querySelector("#kota-contents");
  downIcon.classList.toggle("rotate-180");
  downContents.classList.toggle("hidden");
}
function showKategori() {
  let downIcon = document.querySelector("#down-icon-kategori");
  let downContents = document.querySelector("#kategori-contents");
  downIcon.classList.toggle("rotate-180");
  downContents.classList.toggle("hidden");
}

function getItemIdKota() {
  let downContents = document.querySelector("#kota-contents");
  let downIcon = document.querySelector("#down-icon-kota");
  let items = document.querySelectorAll(".items-kota");
  let selectedItem = document.querySelector("#selected-kota");
  items.forEach(function (item) {
    item.addEventListener("click", function (event) {
      downContents.classList.add("hidden");
      downIcon.classList.remove("rotate-180");
      // let id = event.target.id;
      let value = this.textContent;
      selectedItem.textContent = value;
    });
  });
}
function getItemIdKategori() {
  let downContents = document.querySelector("#kategori-contents");
  let downIcon = document.querySelector("#down-icon-kategori");
  let items = document.querySelectorAll(".items-kategori");
  let selectedItem = document.querySelector("#selected-kategori");
  items.forEach(function (item) {
    item.addEventListener("click", function (event) {
      downContents.classList.add("hidden");
      downIcon.classList.remove("rotate-180");
      // let id = event.target.id;
      let value = this.textContent;
      selectedItem.textContent = value;
    });
  });
}

getItemIdKota();
getItemIdKategori();

// Mengambil data API
async function getDataProducts() {
  const apiUrl = "https://652508a767cfb1e59ce6758b.mockapi.io/products";
  try {
    let respons = await fetch(apiUrl);
    let products = await respons.json();

    return products;
  } catch (error) {
    console.log(error);
  }
}

async function getDataMenu() {
  try {
    let products = await getDataProducts();
    let listProducts = document.querySelector("#container-list");
    await Promise.all(
      products.map(async (item, index) => {
        let apiUrl = `https://652508a767cfb1e59ce6758b.mockapi.io/products/${item.id}/menu`;
        let response = await fetch(apiUrl);
        let menu = await response.json();
        let filteredData = menu.filter(
          (itemMenu) => itemMenu.productId == item.id
        );
        // Menghitung harga terendah
        let hargaTerendah = Math.min(
          ...filteredData.map((item) => item.hargaMenu)
        );
        // Menghitung harga tertinggi
        let hargaTertinggi = Math.max(
          ...filteredData.map((item) => item.hargaMenu)
        );

        let cardPaket = `
        <div  id="${item.id}"
              onClick="getId(this)"
              class="w-full max-h-full p-2 aspect-[3/4] bg-white border-solid border-[1.5px] border-[#de283b] shadow cursor-pointer select-none rounded transition-all hover:-translate-y-1 active:translate-y-0">
            <div class="w-auto aspect-square rounded-[4px] bg-[url('${
              item.gambarPaket
            }')] bg-cover bg-center"></div>
            <div class="keterangan">
              <div class="main-info mt-1">
                <h1 class="font-semibold text-[#de283b] text-ellipsis overflow-hidden whitespace-nowrap">${
                  item.namaPaket
                }</h1>
                <h3 class="text-sm">Rp${hargaTerendah.toLocaleString(
                  "id-ID"
                )} - Rp${hargaTertinggi.toLocaleString("id-ID")}</h3>
                <h5 class="text-xs">${menu.length} Menu</h5>
              </div>
              <div class="second-info mt-1">
                <div class="flex items-center gap-1">
                  <i  class="fa-solid fa-star"
                      style="color: #de283b;"></i>
                  <p class="text-sm text-[#de293b]">${item.ratingPaket}</p>
                </div>
              <div class="flex items-center justify-between">
                <p class="text-xs">${item.paketTerjual} Terjual</p>
                <div class="flex items-center gap-1">
                  <p class="text-xs">${item.lokasiPaket}</p>
                  <i  class="fa-solid fa-location-dot fa-xs"
                      style="color: #000000;"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
          `;
        listProducts.innerHTML += cardPaket;
      })
    );
    document.querySelector("#loading").classList.add("hidden");
    document.querySelector("#page-container").classList.remove("hidden");
  } catch (error) {
    console.error(error);
  }
}
getDataMenu();

function getId(element) {
  let id = element.id;
  console.log("ID dari div yang diklik adalah: " + id);
  window.location.href =
    "/pages/galang-product-detail/product-detail.html?id=" +
    encodeURIComponent(id);
}
