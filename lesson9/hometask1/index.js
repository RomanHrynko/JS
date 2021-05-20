const getKeys = obj => Object.keys(obj).map(name => console.log(name));

const obj1 = { 'John Doe': 19, Tom: 17, Bob: 18 };
console.log(getKeys(obj1));
