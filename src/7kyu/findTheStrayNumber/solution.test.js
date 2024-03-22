import { stray } from './solution';

describe('Sample Tests', () => {
  it('Should pass Sample Tests', () => {
    expect(stray([1, 1, 2])).toBe(2);
    expect(stray([1, 2, 1])).toBe(2);
    expect(stray([2, 1, 1])).toBe(2);
  });
});
