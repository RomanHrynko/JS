const getTotalPrice = numbers => {
  const sumElem = numbers.reduce((a, b) => a + b, 0);
  console.log(sumElem);
  return '$' + Math.floor(sumElem * 100) / 100;
};

const array = [1.113, 5.555, 2.12, 9.01];
console.log(getTotalPrice(array));
