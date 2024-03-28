import { rowSumOddNumbers } from './solution';

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    expect(rowSumOddNumbers(1)).toBe(1);
    expect(rowSumOddNumbers(42)).toBe(74088);
  });
});
