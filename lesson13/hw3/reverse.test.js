import { reverseArray } from './reverse';

it('should return reverse array', () => {
  const result = reverseArray([1, 2, 3, 4, 5]);

  expect(result).toEqual([5, 4, 3, 2, 1]);
});

it('should return null if it is not array', () => {
  const result = reverseArray(11);

  expect(result).toEqual(null);
});

it('should return null if it is not array', () => {
  const result = reverseArray('Good day');

  expect(result).toEqual(null);
});
