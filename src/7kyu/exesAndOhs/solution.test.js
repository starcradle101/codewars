import { XO } from './solution';

describe('Tests', () => {
  it('test', () => {
    const testCases = [
      { input: 'xo', expected: true },
      { input: 'xxOo', expected: true },
      { input: 'xxxm', expected: false },
      { input: 'Oo', expected: false },
      { input: 'ooom', expected: false },
    ];

    testCases.forEach(({ input, expected }) => {
      expect(XO(input)).toEqual(expected);
    });
  });
});
