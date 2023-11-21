import { maskify } from './solution';

describe('maskify', () => {
  const testCases = [
    { input: '4556364607935616', expected: '############5616' },
    { input: '1', expected: '1' },
    { input: '11111', expected: '#1111' },
  ];

  testCases.forEach(({ input, expected }) => {
    it(`should maskify "${input}" to "${expected}"`, () => {
      expect(maskify(input)).toBe(expected);
    });
  });
});
