import { sequenceSum } from './solution';

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    expect(sequenceSum(2, 6, 2)).toBe(12);
    expect(sequenceSum(1, 5, 1)).toBe(15);
    expect(sequenceSum(1, 5, 3)).toBe(5);
  });
});
