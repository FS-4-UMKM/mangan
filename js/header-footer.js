showSearch();
hideSearch();
showMenu();

// Menampulkan menu dari hamburger bar
function showMenu() {
  let hamBar = document.querySelector(".toggle");
  let navMenu = document.querySelector("#list-nav");
  hamBar.addEventListener("click", function () {
    navMenu.classList.toggle("hidden");
  });
}

// Menampilkan search bar responsive
function showSearch() {
  let searchIcon = document.querySelector("#search-icon");
  let searchBar = document.querySelector("#search-bar");
  let hamBar = document.querySelector(".ham-bar");
  searchIcon.addEventListener("click", function () {
    searchBar.classList.remove("hidden");
    searchBar.classList.add("flex");
    hamBar.classList.add("hidden");
  });
}
// Menghilangkan search bar responsive
function hideSearch() {
  let closeIcon = document.querySelector("#close-search");
  let searchBar = document.querySelector("#search-bar");
  let hamBar = document.querySelector(".ham-bar");
  closeIcon.addEventListener("click", function () {
    searchBar.classList.remove("flex");
    searchBar.classList.add("hidden");
    hamBar.classList.remove("hidden");
  });
}
