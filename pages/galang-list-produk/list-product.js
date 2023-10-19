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
