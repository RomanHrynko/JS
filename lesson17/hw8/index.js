function calculator(a, b) {
  switch (this.operation) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '/':
      return a / b;
    case '*':
      return a * b;
    default:
      return NaN;
  }
}

/*
 * Ф-ция multiplier должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из произведение
 */

// put your code here

export const multiplier = calculator.bind({ operation: '*' });

/*
 * Ф-ция summator должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 2 числа и возвращать из сумму
 */

// put your code here

export const summator = calculator.bind({ operation: '+' });

/*
 * Ф-ция twice должна быть создана на основе calculator
 * с использования .bind
 * и должна принимать 1 число и возвращать это число умноженное на 2
 */

// put your code here

export const twice = calculator.bind({ operation: '*' }, 2);

console.log(multiplier(2, 4));
console.log(summator(2, 4));
console.log(twice(6));
