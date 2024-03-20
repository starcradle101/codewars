import { minMax } from './solution';

describe('minMax', () => {
  const testCases = [
    [
      [1, 2, 3, 4, 5],
      [1, 5],
    ],
    [
      [2334454, 5],
      [5, 2334454],
    ],
    [[5], [5, 5]],
  ];
  testCases.forEach(([input, expected]) => {
    it(`should work for ${JSON.stringify(input)}`, () => {
      expect(minMax(input)).toEqual(expected);
    });
  });
});
