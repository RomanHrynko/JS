const array = [7, 8, 9, 4];
function getSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.reduce((a, b) => a + b);
}
const result = getSum(array);
console.log(result);
