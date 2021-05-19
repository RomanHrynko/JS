const arr = [2, 4, 3, 5];
function squareArray(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  return numbers.map(a => a ** 2);
}
console.log(squareArray(arr));
