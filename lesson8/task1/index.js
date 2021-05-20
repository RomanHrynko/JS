const transformToObject = arr => {
  const obj = {};

  arr.forEach(element => {
    obj[element] = element;
  });

  return obj;
};

console.log(transformToObject(['a', 17.1, 'John Doe']));
