export const reverseArray = numbers => {
  if (!Array.isArray(numbers)) {
    return null;
  }
  return numbers.slice().reverse();
};

const arr = [1, 4, 4, 5, 7, 9, 11, 7];
