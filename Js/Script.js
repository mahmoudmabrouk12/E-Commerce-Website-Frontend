let menu_toggle = document.getElementById("menu-toggle");
let nav = document.getElementById("navbar");
let close = document.getElementById("close");
lg_bag = document.getElementById("lg-bag");

if (menu_toggle) {
  menu_toggle.addEventListener("click", () => {
    nav.classList.add("navbar", "flex-column", "p-4", "close");
    close.classList.remove("d-none");
    lg_bag.classList.add("d-none");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("navbar", "flex-column", "p-4", "close");
    close.classList.add("d-none");
  });
}

let mainImage = document.getElementById("mainImag");
let smallImages = document.querySelectorAll(".small-img");

for (let index = 0; index < smallImages.length; index++) {
  smallImages[index].addEventListener("click", () => {
    mainImage.src = smallImages[index].src;
  });
}
