const calc = string => {
  const [a, operator, b] = string.split(' ');
  let result;
  switch (operator) {
    case '+':
      result = +a + +b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
  }

  return `${string} = ${result}`;
};

const str = '3 * 7';
console.log(calc(str));
