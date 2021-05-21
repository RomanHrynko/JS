const getRandomNumbers = (length, from, to) => {
  if (to - from < 1) {
    return null;
  }

  from = Math.ceil(from);
  to = Math.floor(to);
  const randomNumbers = [];

  for (let i = 0; i < length - 1; i += 1) {
    randomNumbers[i] = Math.floor(Math.random() * (to - from) + from);
    randomNumbers.push(randomNumbers[i]);
  }
  return randomNumbers;
};

// examples
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22)); // ==> [3, 3, 2, 3, 2]
