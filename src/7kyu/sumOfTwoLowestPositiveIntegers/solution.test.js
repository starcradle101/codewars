import { sumTwoSmallestNumbers } from './solution';

describe('sumTwoSmallestNumbers function', () => {
  test('sums the two smallest numbers in the array [5, 8, 12, 19, 22]', () => {
    expect(sumTwoSmallestNumbers([5, 8, 12, 19, 22])).toBe(13);
  });

  test('sums the two smallest numbers in the array [15, 28, 4, 2, 43]', () => {
    expect(sumTwoSmallestNumbers([15, 28, 4, 2, 43])).toBe(6);
  });

  test('sums the two smallest numbers in the array [3, 87, 45, 12, 7]', () => {
    expect(sumTwoSmallestNumbers([3, 87, 45, 12, 7])).toBe(10);
  });

  test('sums the two smallest numbers in the array [23, 71, 33, 82, 1]', () => {
    expect(sumTwoSmallestNumbers([23, 71, 33, 82, 1])).toBe(24);
  });

  test('sums the two smallest numbers in the array [52, 76, 14, 12, 4]', () => {
    expect(sumTwoSmallestNumbers([52, 76, 14, 12, 4])).toBe(16);
  });
});
