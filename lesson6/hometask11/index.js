const includes = (arr, num) => {
  if (arr.includes(num)) {
    return true;
  }
  return false;
};
console.log(includes([1, 4, 8, 3], 5));
