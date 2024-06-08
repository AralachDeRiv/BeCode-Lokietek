/*Header*/

const hamburger = document.querySelector(".hamburger");
const cross = document.querySelector(".cross");
const mobileMenu = document.querySelector(".menu-small-format");

hamburger.addEventListener("click", () => {
  mobileMenu.style.right = 0;
});
cross.addEventListener("click", () => {
  mobileMenu.style.right = "-100%";
});

/*Main*/

AOS.init();
window.addEventListener("load", AOS.refresh);
