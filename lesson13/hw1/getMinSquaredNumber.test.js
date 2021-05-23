import { getMinSquaredNumber } from './getMinSquaredNumber.js';

it('check if array is empty', () => {
  const result = getMinSquaredNumber([]);
  expect(result).toEqual(null);
});

it('check if array is not given', () => {
  const result = getMinSquaredNumber('Good morning');
  expect(result).toEqual(null);
});

it('shoul return min squared number', () => {
  const result = getMinSquaredNumber([-777, 3, -2, 6, 45, -20]);
  expect(result).toEqual(4);
});
