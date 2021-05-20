const copyObj = obj => Object.assign({}, obj);

const obj1 = { 'John Doe': 19, Tom: 17, Bob: 18 };
console.log(copyObj(obj1));
