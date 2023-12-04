import { isPangram } from './solution';

describe('Tests', () => {
  it('test1', () => {
    const string = 'The quick brown fox jumps over the lazy dog.';
    expect(isPangram(string)).toBe(true);
  });

  it('test2', () => {
    const string = 'This is not a pangram.';
    expect(isPangram(string)).toBe(false);
  });
});
