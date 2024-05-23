function dice(faces, times) {
  for (let time = 0; time < times; time++) {
    console.log(Math.floor(Math.random() * faces) + 1);
  }
}

function greet(f, l) {
  console.log(`This is ${f} ${l}`);
}

function sum(a, b) {
  if (typeof a == "number" && typeof b == "number") {
    return a + b;
  } else {
    return "noop";
  }
}

function isShortWeather(temp) {
  return temp >= 24;
}

function lastElement(list) {
  return list[list.length - 1] ? list[list.length - 1] : null;
}

function capitalize(word) {
  let firstLetter = word[0].toUpperCase();
  return firstLetter + word.slice(1);
}

function sumArray(list) {
  let count = 0;
  for (x of list) {
    count += x;
  }
  return count;
}

function returnDay(x) {
  const week = ["M", "T", "W", "Tr", "F", "Sa", "Su"];
  return week[x - 1] ? week[x - 1] : null;
}
