// put your code here
const m = 7;
const n = 21;
let result = 1;
for (let i = m; i <= n; i += 1) {
  if (i % 2 !== 0) {
    result *= i;
  }

  console.log('Result: ', result);
}
