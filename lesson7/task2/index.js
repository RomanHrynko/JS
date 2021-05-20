const sortDesc = numbers => numbers.slice().sort((a, b) => b - a);

const arr = [3, 5, 1, 2, 12, 31, 100];

console.log(sortDesc(arr));
