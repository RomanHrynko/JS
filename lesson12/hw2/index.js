const cleanTransactionsList = arrTransaction => {
  return arrTransaction
    .filter(elem => isFinite(elem))
    .map(elem => '$' + parseFloat(elem).toFixed(2));
};

const array = ['  1.9 ', '16.4', 17];
console.log(cleanTransactionsList(array));
