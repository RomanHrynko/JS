function getSum(start, end) {
  let count = 0;
  for (let i = start; i <= end; i += 1) {
    if (i % 2 === 0) {
      count += i;
    }
  }
  return count;
}
const result = getSum(5, 10);
console.log(result);
