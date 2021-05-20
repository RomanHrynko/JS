const filterNames = (arr, text) => arr.filter(name => name.length > 5 && name.includes(text));

const word = 'ya';
const array = ['John', 'Olivya', 'Oleksandr', 'Emanuel', 'Vanya', 'Nastya'];
console.log(filterNames(array, word));
