/* eslint-disable max-classes-per-file */

// 1. Create class User with fields id, name, sessionId;
// 2. Create getters from id, name, sessionId;
// 3. Create class UserRepozitory
// 4. Ban mutation of the array users - using Object.freeze
// 5. Create methods: - getUserNames(), getUserIds, getUserNameById

class User {
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get sessionId() {
    return this._sessionId;
  }
}

class UserRepository {
  constructor(users) {
    this._users = Object.freeze(users);
  }

  get users() {
    return this._users;
  }

  getUserNames() {
    return this._users.map(el => el.name);
  }

  getUserIds() {
    return this._users.map(el => el.id);
  }

  getUserNameById(id) {
    for (const user of this._users) {
      if (user.id === id) {
        return user.name;
      }
    }
  }
}

// examples
const user = new User('1', 'Tom', 'session-id');
console.log(user.id); // '1'
console.log(user.name); // 'Tom'
console.log(user.sessionId); // 'session-id'

// но изменить эти свойства нельзя
user.name = 'Bob'; // пытаемся изменить старое значение
console.log(user.name); // 'Tom' - но изменение проигнорировано, так как setter отсутствует

const userRep = new UserRepository([
  { id: '1', name: 'Tom', sessionId: 'session-id' },
  { id: '2', name: 'Bob', sessionId: 'session-id' },
  { id: '3', name: 'Ann', sessionId: 'session-id' },
]);
console.log(userRep.getUserNames());
console.log(userRep.getUserIds());
console.log(userRep.getUserNameById('3'));
