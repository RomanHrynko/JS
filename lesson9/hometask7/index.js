function buildObject(keysList, valuesList) {
  const obj = {};
  for (let i = 0; i < keysList.length; i += 1) {
    obj[keysList[i]] = valuesList[i];
  }

  return obj;
}
//
function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, key, value) => ({ ...obj, [key]: valuesList[value] }), {});
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
console.log(buildObject(keys, values)); // ==> { name: 'Bob', address: 'Ukraine', age: 56 }
