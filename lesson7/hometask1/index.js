const squareArray = numbers => {
  if (!Array.isArray(numbers)) {
    return null;
  }
  return numbers.map(n => n ** 2);
};

const arr = [1, 4, 4, 5, 7, 9, 11, 7];
console.log(squareArray(arr));
