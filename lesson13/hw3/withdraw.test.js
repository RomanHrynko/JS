import { withdraw } from './withdraw';

it("should return balance of money on the client's account", () => {
  const clients = ['John', 'Rostik', 'Igor', 'Misha'];
  const balances = [150, 30, 1500, 10];
  const client = 'Igor';
  const amount = 100;

  const result = withdraw(clients, balances, client, amount);

  expect(result).toEqual(1400);
});

it('should check if the balance of money is biggest than the amount', () => {
  const clients = ['John', 'Rostik', 'Igor', 'Misha'];
  const balances = [150, 30, 1500, 10];
  const client = 'Misha';
  const amount = 100;

  const result = withdraw(clients, balances, client, amount);

  expect(result).toEqual(-1);
});
