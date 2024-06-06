var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 45,
  loop: true,
  direction: "vertical",
});

const pictures = document.querySelectorAll("img");

const darkPicture = () => {
  pictures.forEach((picture) => {
    picture.style.opacity = 0.25;
  });
};

pictures.forEach((picture) => {
  picture.addEventListener("click", () => {
    swiper.slideTo(picture.id);
    darkPicture();
    picture.style.opacity = 1;
  });
});
