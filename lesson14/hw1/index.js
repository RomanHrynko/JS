let result = 0;

export const getMemo = () => result;

export const add = num => (result += num);

export const decrease = num => (result -= num);

export const reset = () => (result = 0);

add(17);
console.log(getMemo());

decrease(18);
console.log(getMemo());

reset();
console.log(getMemo());
