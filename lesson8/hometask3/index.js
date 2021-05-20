function getKeys(obj) {
  for (const key in obj) {
    console.log(key);
  }
}

const user = {
  name: 'Tom',
  age: 17,
};
console.log(getKeys(user));
