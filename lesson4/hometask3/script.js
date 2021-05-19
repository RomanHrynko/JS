// put your code here
const m = 1;
const n = 50;
let result = 0;
for (let i = m; i <= n; i += 1) {
  if (i % 5 === 0) {
    console.log(i);
    // eslint-disable-next-line no-continue
    continue;
  }
  if (i % 2 === 0 && i % 4 !== 0) {
    result += i;
  } else if (i % 3 === 0) {
    result -= i;
  } else if (i % 4 === 0) {
    result *= i;
  }
}
