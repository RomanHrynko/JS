const getPeople = obj =>
  Object.values(obj)
    .flat()
    .map(name => Object.values(name))
    .flat();

const rooms = {
  room1: [{ name: 'Sanya' }, { name: 'Katya' }, { name: 'Kira' }],
  room2: [{ name: 'Bobik' }, { name: 'Tomas' }, { name: 'Jeri' }],
  room3: [{ name: 'John' }, { name: 'Nickolya' }, { name: 'Misiko' }],
};
console.log(getPeople(rooms));
