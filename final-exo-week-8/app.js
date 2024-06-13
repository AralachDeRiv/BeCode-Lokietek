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

// Modal Setting

const btnContact1 = document.querySelector(".contact1");
const dialogContact = document.querySelector(".dialog-contact");
const form1 = document.querySelector(".dialog-contact form");
const errorMsg = document.querySelector(".error-msg");

btnContact1.addEventListener("click", () => {
  dialogContact.showModal();
  form1.style.opacity = 1;
});

dialogContact.addEventListener("click", (e) => {
  const rect = dialogContact.getBoundingClientRect();
  if (
    e.clientX < rect.left ||
    e.clientX > rect.right ||
    e.clientY < rect.top ||
    e.clientY > rect.bottom
  ) {
    form1.style.opacity = 0;
    setTimeout(() => {
      dialogContact.close();
    }, 650);
  }
});

dialogContact.addEventListener("submit", (e) => {
  e.preventDefault();
  errorMsg.innerHTML = "";
  let name = document.getElementById("name").value;
  let company = document.getElementById("company").value;
  let email = document.getElementById("email").value;
  let emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (!name || !company || !email) {
    errorMsg.innerHTML = "<p>All gaps have to be filled!";
  } else if (!email.match(emailPattern)) {
    errorMsg.innerHTML += "<p>Email not valid!";
  } else {
    console.log([name, company, email]);
    form1.style.opacity = 0;
    setTimeout(() => {
      dialogContact.close();
    }, 650);
  }
});

// Swiper logo clients

// document.addEventListener("DOMContentLoaded", function () {
//   // Configuration Swiper
//   var swiper = new Swiper(".mySwiperLogo", {
//     slidesPerView: 4,
//     spaceBetween: 30,

//     autoplay: {
//       delay: 3500,
//       disableOnInteraction: false,
//     },
//     loop: true,
//   });
// });
var swiper = new Swiper(".mySwiperLogo", {
  slidesPerView: 4,
  spaceBetween: 30,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,
});
