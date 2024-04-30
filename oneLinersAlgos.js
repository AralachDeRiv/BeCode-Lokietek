const removeDuplicates = (array) => Array.from(new Set(array));

const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

const dayDif = (date1, date2) => (date2 - date1) / 86400000;

const average = (...numbers) =>
  numbers.reduce((sum, num) => sum + num) / numbers.length;

const getSmallest = (arr) => Math.min(...arr);

const areEqual = (arr1, arr2) =>
  arr1.sort().every((num, i) => num == arr2.sort()[i]);

const randomRGB = () =>
  "rgb(" +
  [...Array(3).keys()].map((x) => Math.floor(Math.random() * 256)).join(",") +
  ")";

const occurencies = (word, letter) =>
  word.split("").filter((x) => x == letter).length;

const onlyPositives = (array) =>
  array.filter((x) => x >= 0).reduce((a, x) => a + x);

    const scanAndFind = (arrayObj, obj) => arrayObj.filter(
    (x) => x[Object.entries(obj)[0][0]] == Object.entries(obj)[0][1]
  );



