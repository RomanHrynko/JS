// input: obj, obj;
// output: boolean;

// ALGO:
// 1. check keys length
// 2. check every key value, if not equal => false;

// option 1
// function compareObjects(obj1, obj2) {
//   const arr1 = Object.entries(obj1).join(' ');
//   const arr2 = Object.entries(obj2).join(' ');

//   return arr1 === arr2;
// }

// option 2
// function compareObjects(obj1, obj2) {
//   const key1 = Object.keys(obj1);
//   const key2 = Object.keys(obj2);
//   if (key1.length !== key2.length) {
//     return false;
//   }

//   return key1.every(key => obj1[key] === obj2[key]);
// }

// option 3
function compareObjects(obj1, obj2) {
  const key1 = Object.keys(obj1);
  const key2 = Object.keys(obj2);
  if (key1.length !== key2.length) {
    return false;
  }

  return !key1.some(key => obj1[key] !== obj2[key]);
}

// option 4
// function compareObjects(obj1, obj2) {
//   const key1 = Object.keys(obj1);
//   const key2 = Object.keys(obj2);

//   if (key1.length !== key2.length) {
//     return false;
//   }

//   let result = true;
//   key1.forEach(el => {
//     if (obj1[el] !== obj2[el]) {
//       result = false;
//     }
//   });

//   return result;
// }

// option 5
// function compareObjects(obj1, obj2) {
//   return JSON.stringify(obj1) === JSON.stringify(obj2);
// }

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
