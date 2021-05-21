const superRound = (num, fixed) => [
  Math.floor(num * 10 ** fixed) / 10 ** fixed,
  Math.round(num * 10 ** fixed) / 10 ** fixed,
  Math.ceil(num * 10 ** fixed) / 10 ** fixed,
  Math.trunc(num * 10 ** fixed) / 10 ** fixed,
  +num.toFixed(fixed),
];

console.log(superRound(13.511242, 3));
