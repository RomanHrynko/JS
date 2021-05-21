const getCustomersList = obj =>
  Object.entries(obj)
    .map(elem => ({ id: elem[0], ...obj[elem[0]] }))
    .sort((a, b) => a.age - b.age);

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 17,
  },
  'customer-id-3': {
    name: 'Mark',
    age: 7,
  },
  'customer-id-4': {
    name: 'Roma',
    age: 25,
  },
};

console.log(getCustomersList(customers));
