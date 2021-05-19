const arr = [2, 5, 6, 8, 11, 9, 4];
function reverseArray(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  const reverseNumbers = [];
  for (let i = numbers.length - 1; i >= 0; i -= 1) {
    reverseNumbers.push(numbers[i]);
  }
  return reverseNumbers;
}
console.log(reverseArray(arr));
