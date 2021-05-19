function removeDuplicates(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  const uniqueArr = [];
  for (let i = 0; i < array.length; i += 1) {
    if (uniqueArr.indexOf(array[i]) < 0) {
      uniqueArr.push(array[i]);
    }
  }
  return uniqueArr;
}
console.log(removeDuplicates([1, 1, 4, 6, 6, 6, 4, 9, 7]));
