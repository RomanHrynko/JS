function cloneArr(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const newArr = arr.slice();
  return newArr;
}
console.log(cloneArr([2, 4]));
