import { getAdults } from './adults';

it('should find 18+ adults in object', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should find 18+ adults in object', () => {
  const result = getAdults({ Ann: 56, Andrey: 7 });

  expect(result).toEqual({ Ann: 56 });
});

it('should return empty object for empty object', () => {
  const result = getAdults({});

  expect(result).toEqual({});
});
