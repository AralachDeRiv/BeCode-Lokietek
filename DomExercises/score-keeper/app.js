const scoreOne = document.querySelector(".One");
const scoreTwo = document.querySelector(".Two");
const btns = document.querySelector(".container");

const checkResult = () => {
  if (parseInt(scoreOne.innerText) + parseInt(scoreTwo.innerText) >= 5) {
    if (parseInt(scoreOne.innerText) > parseInt(scoreTwo.innerText)) {
      scoreOne.style.color = "green";
      scoreTwo.style.color = "red";
    } else {
      scoreOne.style.color = "red";
      scoreTwo.style.color = "green";
    }
    return true;
  }
};

btns.addEventListener("click", (e) => {
  if (e.target.matches(".btn")) {
    if (!checkResult()) {
      if (e.target.matches(".one")) {
        scoreOne.innerText = parseInt(scoreOne.innerText) + 1;
        checkResult();
      } else if (e.target.matches(".two")) {
        scoreTwo.innerText = parseInt(scoreTwo.innerText) + 1;
        checkResult();
      }
    }
  } else {
    scoreOne.innerText = 0;
    scoreTwo.innerText = 0;
    scoreOne.style.color = "black";
    scoreTwo.style.color = "black";
  }
});
