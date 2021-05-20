function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}

// put your code here

function addPropertyV2(obj, key, value) {
  const newObj = {};
  newObj[key] = value;
  return Object.assign(obj, newObj);
}
// put your code here
function addPropertyV3(obj, key, value) {
  const newObj = Object.assign({}, obj);
  newObj[key] = value;
  return newObj;
}
// put your code here
function addPropertyV4(obj, key, value) {
  const newObj = { ...obj };
  newObj[key] = value;
  return newObj;
}
// examples
const transaction = {
  value: 170,
};
console.log(addPropertyV1(transaction, 'currency', 'USD')); // ==> { value: 170, currency: 'USD' }
console.log(addPropertyV2(transaction, 'currency', 'USD'));
console.log(addPropertyV3(transaction, 'currency', 'USD'));
console.log(addPropertyV4(transaction, 'currency', 'USD'));
