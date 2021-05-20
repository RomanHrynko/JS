const flatArray = arr =>
  arr
    .slice()
    .flat()
    .sort((a, b) => b - a);

const arr = [1, [4, 4, 5, 7, 9], 11, [7]];
console.log(flatArray(arr));
