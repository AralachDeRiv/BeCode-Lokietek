const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  slidesPerView: 3.5,
  spaceBetween: 10,
  speed: 300,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
