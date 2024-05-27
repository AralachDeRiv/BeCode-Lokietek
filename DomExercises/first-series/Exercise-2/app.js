const title = document.querySelector("h1");
const container = document.querySelector(".container");

const buttonMaker = () => {
  title.innerText = "There are a lot of buttons here !";
  for (let i = 1; i <= 100; i++) {
    container.innerHTML += `<button>I am button ${i}</button>`;
  }
};

setTimeout(buttonMaker, 2000);
