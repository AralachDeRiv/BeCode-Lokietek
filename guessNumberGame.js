let maxNumber = parseInt(prompt("A max number : "));

while (!maxNumber) {
  maxNumber = parseInt(prompt("Please enter a number : "));
}

let randomNumber = Math.floor(Math.random() * maxNumber + 1);

let count = 0;
let guessNumber;

while (guessNumber !== randomNumber) {
  while (true) {
    guessNumber = parseInt(prompt("Guess a number between 1 and max number :"));
    if (!guessNumber && guessNumber !== 0) {
      alert("This is not a valid number !!");
    } else if (!(guessNumber >= 1 && guessNumber <= maxNumber)) {
      alert("You have to choose between 1 and max number");
    } else {
      break;
    }
  }

  if (guessNumber < randomNumber) {
    alert("Higher !");
  } else if (guessNumber > randomNumber) {
    alert("Lower !");
  }
  count++;
}

alert(`Hourra ! You did it in ${count} tries !`);