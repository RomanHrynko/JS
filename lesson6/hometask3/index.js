const numbers = [2, 4, 3, 5];
function checkSum(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const sum = arr.reduce((a, b) => a + b);

  if (sum > 100) {
    return true;
  }
  return false;
}
console.log(checkSum(numbers));
