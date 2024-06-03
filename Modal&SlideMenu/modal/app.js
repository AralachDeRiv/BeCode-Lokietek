const openBtn = document.querySelector(".open");
const closeBtn = document.querySelector(".close");
const modalWindow = document.querySelector(".modal");
const body = document.querySelector("body");

function clickInsideModal(event) {
  const isClickInsideModal = modalWindow.contains(event.target);
  if (!isClickInsideModal) {
    modalWindow.style.display = "none";
    body.classList.remove("no-scroll");
  }
}

openBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  modalWindow.style.display = "block";
  body.classList.add("no-scroll");
  document.addEventListener("click", clickInsideModal);
});

closeBtn.addEventListener("click", () => {
  modalWindow.style.display = "none";
  body.classList.remove("no-scroll");
  document.removeEventListener("click", clickInsideModal);
});
