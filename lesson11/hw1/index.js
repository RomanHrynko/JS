const splitString = (str, len = 10) => {
  if (typeof str !== 'string') {
    return null;
  }
  const arr = [];
  let startPosition = 0;

  while (true) {
    let chunk = str.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    arr.push(chunk);
    startPosition += len;
  }

  if (arr[arr.length - 1].length !== len) {
    arr[arr.length - 1] = arr[arr.length - 1].padEnd(len, '.');
  }

  return arr;
};

const str1 = 'asdfghjklmdfkjhkjfkjkfkwmf';
console.log(splitString(str1, 5));
