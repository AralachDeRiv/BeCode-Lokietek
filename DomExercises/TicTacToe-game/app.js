const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const playedCells = ["", "", "", "", "", "", "", "", ""];

const cells = document.querySelectorAll(".cell");
const message = document.querySelector(".message");
const restart = document.querySelector(".restart");

const checkAnswer = (e) => {
  let number = parseInt(e.classList[1]);
  let place = playedCells[number];
  if (!place) {
    if (playedCells.filter((x) => x == "").length % 2) {
      playedCells[number] = "X";
      e.innerText = "X";
    } else {
      e.innerText = "O";
      playedCells[number] = "O";
    }
  }
};

const removeAllEventListener = () => {
  cells.forEach((e) => e.removeEventListener("click", handleClick));
};

const colorSuccess = (combination) => {
  combination.forEach((i) =>
    Array.from(cells)
      .find((e) => e.classList.contains(i.toString()))
      .classList.add("success")
  );
};

const checkWin = () => {
  let Xwin = false;
  let Owin = false;
  for (combination of winCombinations) {
    Xwin = combination.every((i) => playedCells[i] == "X");
    Owin = combination.every((i) => playedCells[i] == "O");
    if (Xwin) {
      message.innerText = "X win !";
      colorSuccess(combination);
      removeAllEventListener();
      break;
    }
    if (Owin) {
      message.innerText = "O win !";
      colorSuccess(combination);
      removeAllEventListener();
      break;
    }
  }
};

const handleClick = (e) => {
  checkAnswer(e.target);
  checkWin();
};

cells.forEach((e) => {
  e.addEventListener("click", handleClick);
});

restart.addEventListener("click", () => {
  window.location.reload();
});
