const sum = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce((a, b) => a + b);
};
const array = [1, 4, -4, 5, 7, 9, 10, 7];
console.log(sum(array));
