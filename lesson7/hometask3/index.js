const increaseEventEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map(n => (n % 2 === 0 ? n + delta : n));
};

const delt = 10;
const array = [1, 4, -4, 5, 7, 9, 10, 7];
console.log(increaseEventEl(array, delt));
