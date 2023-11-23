import { isTriangle } from './solution';

describe('Public tests', () => {
  it('Testing for fixed tests', () => {
    expect(isTriangle(1, 2, 2)).toBe(true);
    expect(isTriangle(7, 2, 2)).toBe(false);
  });
});
