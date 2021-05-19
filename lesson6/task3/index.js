function getSpecialNumbers(m, n) {
  const arr = [];
  for (let i = m; i <= n; i += 1) {
    if (i % 3 === 0) {
      arr.push(i);
    }
  }
  return arr;
}
const result = getSpecialNumbers(2, 10)
console.log(result);