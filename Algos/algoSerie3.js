function oddishOrEvenish(x) {
  return x
    .toString()
    .split("")
    .reduce((acc, current) => acc + parseInt(current), 0) % 2
    ? "Evenish"
    : "Oddish";
}

function getTotalPrice(list) {
  return list.reduce((acc, obj) => acc + obj["price"] * obj["quantity"], 0);
}

function reverseOdd(string) {
  return string
    .split(" ")
    .map((x) => {
      return x.length % 2 == 0 ? x : x.split("").reverse().join("");
    })
    .join(" ");
}

function isSmooth(sentence) {
  const arrayOfWords = sentence.split(" ");
  let queue = arrayOfWords.shift();
  for (word of arrayOfWords) {
    if (word[0] !== queue.slice(-1)) {
      return false;
    }
    queue = word;
  }
  return true;
}

function sevenBoom(list) {
  return list.some((x) => x.toString().indexOf("7") !== -1)
    ? "Booom"
    : "No seven";
}

// °F = °C x 9 ÷ 5 + 32,
// °C = (°F - 32) x 5 ÷ 9

function convert(temp) {
  if (
    (!parseFloat(temp) && parseFloat(temp) !== 0) ||
    (temp.slice(-2) !== "°C" && temp.slice(-2) !== "°F")
  ) {
    return "Error";
  } else if (temp.slice(-2) == "°C") {
    F = (parseFloat(temp) * 9) / 5 + 32;
    return `${Math.round(F)}°F`;
  } else {
    C = ((parseFloat(temp) - 32) * 5) / 9;
    return `${Math.round(C)}°C`;
  }
}

// Utilisation du Set + approprié dans ce context
// mais au cas on peut utiliser Array.from(mySet)
function findBrokenKeys(key, brokenKey) {
  key = key.split("");
  brokenKey = brokenKey.split("");
  return new Set(key.filter((l, i) => l !== brokenKey[i]));
}
