const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let i = 0; i <= arr.length; i += 1) {
    if (arr[i] % 2 === 0) {
      arr[i] += delta;
    }
  }
  return arr;
};

const arr = [2, 5, 6, 8, 11, 9, 4];
const delta = 20;
console.log(increaseEvenEl(arr, delta));
