// create class Order

// 1. Create fields price, city, type, isConfirmed, dateCreated, dateConfirmed
// create id. Id is string, use Math.random()
// 2. Create checkPrice. Shoeld return true if price > 100. Else return false
// 3. Create confirmOrder. check if isConfirmed === false => true
// 4. Create isValidType. Should return true if type === 'Buy' || 'Sell' else false

class Order {
  constructor(price, city, type) {
    this.id = Math.random().toString();
    this.price = price;
    this.city = city;
    this.type = type;
    this.dateCreated = new Date();
    this.dateConfirmed = '';
    this.isConfirmed = false;
  }

  checkPrice() {
    return this.price > 1000;
  }

  consfirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    return this.type === 'Buy' || this.type === 'Sell' ? true : false;
  }
}

const order = new Order(1666, 'Lviv', 'Sell');
console.log(order.checkPrice());
console.log(order.consfirmOrder());
console.log(order.isValidType());

const order1 = new Order(900, 'Peremozhne', 'Buy');
console.log(order1.checkPrice());
console.log(order1.consfirmOrder());
console.log(order1.isValidType());
