const countTrue = (x) => x.reduce((a, c) => (a += c), 0);
const possibleBonus = (a, b) => b - a >= 1 && b - a <= 6;
const num_of_digits = (x) => x.toString().length;
const toArray = (x) => Object.entries(x);
const arrayOfMultiples = (start, times) =>
  [...Array(times).keys()].map((x) => start + x * start);
const removeLeadingTrailing = (x) => parseFloat(x).toString();
const sortIt = (x) => x.join("").split("").sort();
function calculator(x, operator, y) {
  switch (operator) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      if (y == 0) {
        return "Can't divide by 0!";
      } else {
        return x / y;
      }
  }
}
const areaOfCountry = (country, area) =>
  `${country} is ${((area / 148940000) * 100).toFixed(
    2
  )}% of the total world's landmass`;
const reverseWords = (sentence) =>
  sentence.trim().split(" ").reverse().join(" ");