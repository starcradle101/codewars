import { highAndLow } from './solution';

describe('Example tests', () => {
  test.each([
    ['8 3 -5 42 -1 0 0 -9 4 7 4 -4', '42 -9'],
    ['1 2 3', '3 1'],
  ])('highest and lowest (%s) should equal %s', (input, expected) => {
    expect(highAndLow(input)).toBe(expected);
  });
});
