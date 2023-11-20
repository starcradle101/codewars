import { filter_list } from './solution';

describe('Tests', () => {
  it('should filter lists correctly', () => {
    const testCases = [
      { input: [1, 2, 'a', 'b'], expected: [1, 2] },
      { input: [1, 'a', 'b', 0, 15], expected: [1, 0, 15] },
      { input: [1, 2, 'aasf', '1', '123', 123], expected: [1, 2, 123] },
    ];

    testCases.forEach(({ input, expected }) => {
      expect(filter_list(input)).toEqual(expected);
    });
  });
});
