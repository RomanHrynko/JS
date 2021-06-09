const getValueWithDelay = (value, delay) =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const asuncNum1 = getValueWithDelay(56, 1000);
const asuncNum2 = getValueWithDelay(4, 2000);
const asuncNum3 = getValueWithDelay(10, 3000);

const getSum = numbers =>
  numbers.filter(value => !isNaN(value)).reduce((acc, num) => acc + Number(num), 0);

const asyncSum = (...asyncNumbers) => {
  return Promise.all(asyncNumbers)
    .then(numbers => getSum(numbers))
    .catch(() => Promise.reject(new Error("Can't calculate")));
};

asyncSum(asuncNum1, asuncNum2, asuncNum3).then(result => console.log(result));
