function withdraw(clients, balances, client, amount) {
  for (let i = 0; i <= clients.length; i += 1) {
    if (clients[i] === client) {
      if (balances[i] > amount) {
        return balances[i] - amount;
      }
    }
  }
  return -1;
}
console.log(withdraw(['John', 'Rostik', 'Igor', 'Misha'], [150, 30, 1500, 10], 'Misha', 100));
