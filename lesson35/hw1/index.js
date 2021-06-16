const parseUser = str => {
  try {
    return JSON.parse(str);
  } catch (error) {
    return null;
  }
};

console.log(parseUser('{"name": "Bob"}'));
console.log(parseUser({ name: 'Bob' }));
