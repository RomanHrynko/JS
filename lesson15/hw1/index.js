export const createCalculator = () => {
  let result = 0;

  function getMemo() {
    return result;
  }

  function add(num) {
    result += num;
  }
  function decrease(num) {
    result -= num;
  }

  function reset() {
    result = 0;
  }

  return {
    getMemo,
    add,
    decrease,
    reset,
  };
};

const calculator1 = createCalculator();
calculator1.add(77);
console.log(calculator1.getMemo());
calculator1.decrease(27);
console.log(calculator1.getMemo());
calculator1.reset();
console.log(calculator1.getMemo());

// =================================

const calculator2 = createCalculator();
calculator2.add(33);
console.log(calculator2.getMemo());
calculator2.decrease(50);
console.log(calculator2.getMemo());
calculator2.reset();
console.log(calculator2.getMemo());
