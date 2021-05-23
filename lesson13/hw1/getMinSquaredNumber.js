export const getMinSquaredNumber = arr =>
  !Array.isArray(arr) || arr.length === 0
    ? null
    : Math.min(...arr.map(elem => Math.abs(elem))) ** 2;

const array = [-777, 3, -2, 6, 45, -20];

console.log(getMinSquaredNumber(array));
