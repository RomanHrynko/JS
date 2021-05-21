const getMaxAbsoluteNumber = array => {
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }

  const absoluteValue = array.map(num => Math.abs(num));

  return Math.max(...absoluteValue);
};
const arr = [-777, 3, -1, 45, -20];

console.log(getMaxAbsoluteNumber([]));
