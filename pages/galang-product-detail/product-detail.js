// Carousell
document.addEventListener("DOMContentLoaded", function () {
  let main = new Splide("#main-carousel", {
    type: "fade",
    rewind: true,
    pagination: false,
    arrows: false,
  });

  let thumbnails = new Splide("#thumbnail-carousel", {
    fixedWidth: 100,
    fixedHeight: 65,
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
});

function showKategori() {
  let downIcon = document.querySelector("#down-icon-kategori");
  let downContents = document.querySelector("#kategori-contents");
  downIcon.classList.toggle("rotate-180");
  downContents.classList.toggle("hidden");
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
getItemIdKategori();
