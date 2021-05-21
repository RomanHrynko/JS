const arr = [1, 2.25, Infinity, NaN, -0, 33, 'gromcode'];

const getFiniteNumbers = array => array.filter(elem => Number.isFinite(elem));
console.log(getFiniteNumbers(arr));

const getFiniteNumbersV2 = array => array.filter(elem => isFinite(elem));
console.log(getFiniteNumbersV2(arr));

const getNaN = array => array.filter(elem => Number.isNaN(elem));
console.log(getNaN(arr));

const getNaNV2 = array => array.filter(elem => isNaN(elem));
console.log(getNaNV2(arr));

const getIntegers = array => array.filter(elem => Number.isInteger(elem));
console.log(getIntegers(arr));
