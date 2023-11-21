import { solution } from './solution';

describe('Tests', () => {
  it('test', () => {
    expect(solution('abcde', 'cde')).toBe(true);
    expect(solution('abcde', 'abc')).toBe(false);
  });
});
