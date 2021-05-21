const countOccurrences = (text = '', str) => {
  if (str === '') {
    return null;
  }
  const countIndex = [];

  for (let i = 0; i < text.length; i += 1) {
    let index = text.indexOf(str, i);
    if (index !== -1) {
      countIndex.push(index);
      i = index;
    }
  }
  console.log(countIndex);
  return countIndex.length;
};

const str = 'romanromanroomannnrroomaann';
console.log(countOccurrences(str, 'ro'));
