// function compareObjects(obj1, obj2) {
//   if (Object.entries(obj1).length !== Object.entries(obj2).length) {
//     return false;
//   }
//   if (
//     Object.keys(obj1).some((a, b) => a !== Object.keys(obj2)[b]) ||
//     Object.values(obj1).some((a, b) => a !== Object.values(obj2)[b])
//   ) {
//     return false;
//   }
//   return true;
// }

//
function compareObjects(obj1, obj2) {
  const elementEntries1 = Object.entries(obj1);
  const elementEntries2 = Object.entries(obj2);
  if (elementEntries1.join() === elementEntries2.join()) {
    return true;
  }
  return false;
}

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
