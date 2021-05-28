class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge(newAge) {
    this.age = newAge;
    if (newAge < 0) {
      return false;
    }
    if (newAge >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    }

    return newAge;
  }

  static createEmpty() {
    const user = {
      name: '',
      age: null,
    };
    return user;
  }
}
const user = new User('Tom', 25);
console.log(user.sayHi());
console.log(user.requestNewPhoto());
console.log(user.setAge(26));
console.log(User.createEmpty());
