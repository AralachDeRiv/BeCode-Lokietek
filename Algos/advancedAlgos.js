function isPalindrome(string) {
  let a = string
    .replace(/[^a-zA-Z]/g, "")
    .toLowerCase()
    .split("");
  let b = a.slice().reverse();
  return a.every((l, i) => l == b[i]);
}

function fizzBuzz(num) {
  for (let x = 1; x <= num; x++) {
    if (x % 3 !== 0 && x % 5 !== 0) {
      console.log(x);
    } else {
      let fB = (x % 3 == 0 ? "Fizz" : "") + (x % 5 == 0 ? "Buzz" : "");
      console.log(fB);
    }
  }
}

function ransomNote(noteText, magazineText) {
  noteText = noteText.split(" ");
  magazineText = magazineText.split(" ");
  for (let word of noteText) {
    let numberWordN = noteText.filter((x) => x == word).length;
    let numberWordM = magazineText.filter((x) => x == word).length;
    if (numberWordN < numberWordM) {
      return false;
    }
  }
  return true;
}

function caesarCipher(message, num) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return message
    .toLowerCase()
    .split("")
    .reduce((sentence, letter) => {
      if (letter !== " ") {
        let indice = alphabet.indexOf(letter) + num;
        if (indice < 0 || indice > 25) {
          letter = indice < 0 ? alphabet[26 + indice] : alphabet[indice - 26];
        } else {
          letter = alphabet[indice];
        }
      }
      sentence += letter;
      return sentence;
    }, "");
}

function reverseWord(sentence) {
  sentence = sentence.toLowerCase().split(" ");
  return sentence.reduce((newSentence, word) => {
    word = word.split("").reverse().join("");
    newSentence += word + " ";
    return newSentence;
  }, "");
}

function reverseArray(list) {
  let indeceA = 0;
  let indeceB = list.length - 1;
  while (indeceA < indeceB) {
    let itemA = list[indeceA];
    let itemB = list[indeceB];
    list[indeceA] = itemB;
    list[indeceB] = itemA;
    indeceA++;
    indeceB--;
  }
  return list;
}

function twoSums(numArray, sum) {
  const result = [];
  for (const [i, n] of numArray.entries()) {
    let copyArray = numArray.slice(i + 1);
    let towSumsArray = copyArray.filter((x) => x + n == sum).map((x) => [x, n]);
    result.push(...towSumsArray);
  }
  return result;
}

function fibonacci(num) {
  const fibArray = [1, 1];
  for (let x = 0; x <= num - 3; x++) {
    fibArray.push(
      fibArray[fibArray.length - 2] + fibArray[fibArray.length - 1]
    );
  }
  return fibArray;
}
