const arrAverage = arr => {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce((a, b) => a + b) / arr.length;
};

const array = [1, 4, -4, 5, 7, 9, 10, 8];
console.log(arrAverage(array));
