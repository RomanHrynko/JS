// sortAsc

function sortAsc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let done = false;
  while (!done) {
    done = true;
    for (let i = 0; i <= array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        done = false;
        const tmp = array[i - 1];
        array[i - 1] = array[i];
        array[i] = tmp;
      }
    }
  }
  return array;
}
console.log(sortAsc([6, 5, 4, 3, 2, 1]));

// sortDesc

function sortDesc(array) {
  if (!Array.isArray(array)) {
    return null;
  }
  let done = false;
  while (!done) {
    done = true;
    for (let i = 0; i <= array.length; i += 1) {
      if (array[i - 1] < array[i]) {
        done = false;
        const tmp = array[i];
        array[i] = array[i - 1];
        array[i - 1] = tmp;
      }
    }
  }
  return array;
}
console.log(sortDesc([1, 2, 3, 4, 5, 6]));
