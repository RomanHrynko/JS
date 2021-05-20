const withdraw = (clients, balances, client, amount) => {
  const index = clients.indexOf(client);
  if (balances[index] >= amount) {
    return balances[index] - amount;
  }
  return -1;
};

console.log(withdraw(['John', 'Rostik', 'Igor', 'Misha'], [150, 30, 1500, 10], 'Igor', 100));
