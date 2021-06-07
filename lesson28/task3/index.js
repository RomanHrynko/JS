const mult = a => b => a * b;

const twice = mult(2);

const triple = mult(3);

console.log(mult(4)(5));
console.log(twice(20));
console.log(triple(20));
