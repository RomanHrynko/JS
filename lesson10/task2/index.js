const getParsedIntegers = array => array.map(elem => Number.parseInt(elem));

const getParsedIntegersV2 = array => array.map(elem => parseInt(elem));

const getParsedFloats = array => array.map(elem => Number.parseFloat(elem));

const getParsedFloatsV2 = array => array.map(elem => parseFloat(elem));

const arr = [1.01, 2.25, 14.3, '12.55we', -0.1, 33.3, NaN, Infinity];

console.log(getParsedIntegers(arr));
console.log(getParsedIntegersV2(arr));
console.log(getParsedFloats(arr));
console.log(getParsedFloatsV2(arr));
