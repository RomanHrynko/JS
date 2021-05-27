function createArrayOfFunctions(num) {
  if (num === undefined) {
    return [];
  }

  const arr = [];

  for (let i = 0; i < num; i += 1) {
    arr[i] = function () {
      return i;
    };
  }

  return typeof num !== 'number' ? null : arr;
}

console.log(createArrayOfFunctions(9)[5]());
console.log(createArrayOfFunctions(5)[2]());
console.log(createArrayOfFunctions('11'));
console.log(createArrayOfFunctions());
