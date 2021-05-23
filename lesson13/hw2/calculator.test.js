import { calc } from './calculator.js';

it('should return sum of two numbers', () => {
  const result = calc('7 + 7');
  expect(result).toEqual('7 + 7 = 14');
});

it('should return difference of two numbers', () => {
  const result = calc('9 - 7');
  expect(result).toEqual('9 - 7 = 2');
});

it('should return multiplication of two naumbers', () => {
  const result = calc('3 * 3');
  expect(result).toEqual('3 * 3 = 9');
});

it('should return division of two naumbers', () => {
  const result = calc('7 / 7');
  expect(result).toEqual('7 / 7 = 1');
});

it('should return null', () => {
  const result = calc([7 + 7]);
  expect(result).toEqual(null);
});

it('should return sum of two naumbers', () => {
  const result = calc(7 + 7);
  expect(result).toEqual(null);
});
