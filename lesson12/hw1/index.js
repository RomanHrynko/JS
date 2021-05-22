const reverseString = str => {
  if (typeof str !== 'string') {
    return null;
  }

  return str.split('').reverse().join('');
};

const str = 'RomanHrynko1996';
console.log(reverseString(str));
