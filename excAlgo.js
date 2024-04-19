// --------------------------
const rollDie = function () {
  const roll = Math.floor(Math.random() * 6 + 1);
  console.log(roll);
};

const multipleTimes = function (func, times) {
  for (let i = 0; i < times; i++) {
    func();
  }
};

// --------------------------

const user = {
  firstName: "F",
  lastName: "L",
  age: 4,
  aYearHasPast() {
    this.age++;
  },
  printAge() {
    console.log(`${this.firstName} ${this.lastName} is ${this.age}`);
  },
};

// exc algo

const makesTen = (a, b) => a == 10 || b == 10 || a + b == 10;
const calcAge = (age) => age * 365;
const addUp = (x) => {
  if (x == 1) return 1;
  return x + addUp(x - 1);
};
const minMax = (list) => {
  list.sort((a, b) => a - b);
  return [list[0], list[list.length - 1]];
};
const detectWord = (x) => {
  let word = "";
  for (l of x) {
    if (l == l.toLowerCase()) {
      word += l;
    }
  }
  return word;
};
const sortDrinkByPrice = (drinks) => drinks.sort((a, b) => a.price - b.price);
const animals = (chickens, cows, pigs) => (pigs + cows) * 4 + chickens * 2;
const profitableGamble = (probability, prize, pay) =>
  probability * prize - pay > 0;
const frames = (frame, minut) => frame * minut * 60;
const calculateFuel = (distance) => (distance * 10 > 100 ? distance * 10 : 100);
