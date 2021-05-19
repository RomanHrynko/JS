function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  if (max + min > 1000) {
    return true;
  }
  return false;
}
console.log(checker([3, 5, 2, 300]));
