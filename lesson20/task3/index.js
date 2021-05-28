class Wallet {
  _balance = 0;

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log('No enough funds');
      return;
    }
    this._balance -= amount;
  }
}

const user = new Wallet();
user.deposit(33);
console.log(user.getBalance());
user.withdraw(23);
console.log(user.getBalance());
user.withdraw(23);
console.log(user.getBalance());
