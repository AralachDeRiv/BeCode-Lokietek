const listOfButton = document.querySelectorAll("button");
console.log(listOfButton);

listOfButton.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText == "Open tab") {
      btn.innerText = "Close tab";
      btn.nextElementSibling.classList.toggle("hidden");
    } else {
      btn.innerText = "Open tab";
      btn.nextElementSibling.classList.toggle("hidden");
    }
  });
});
