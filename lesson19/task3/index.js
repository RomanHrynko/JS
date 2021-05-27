function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (newAge) {
  this.age = newAge;
  if (newAge < 0) {
    return false;
  }
  if (newAge >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }

  return newAge;
};

const user1 = new User('Tom', 33);
const user2 = new User('Bob', 12);
const user3 = new User('Ann', 15);
user1.sayHi();
user1.requestNewPhoto();
user2.requestNewPhoto();
user3.requestNewPhoto();
console.log(user3.setAge(26));
console.log(user3.setAge(6));
console.log(user3.setAge(-100));
