// 1. Export getOwnProps
// 2. function should return only own properties

export const getOwnProps = obj => {
  const array = [];
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop) && typeof obj[prop] !== 'function') {
      array.push(prop);
    }
  }

  return array;
};

const ship = {
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
    this.stop();
  },
  names: 'Igor',
  lastnames: 'Ig',
};

console.log(getOwnProps(ship));
