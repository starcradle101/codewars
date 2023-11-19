import { squareDigits } from './solution';

describe('squareDigits', () => {
  test.each([
    [3212, 9414],
    [2112, 4114],
    [0, 0],
  ])('squareDigits(%d) should equal %d', (input, expected) => {
    expect(squareDigits(input)).toBe(expected);
  });
});
