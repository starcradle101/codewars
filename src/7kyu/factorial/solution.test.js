import { factorial } from './solution';

describe('Tests', () => {
  it('test', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(2)).toBe(2);
    expect(factorial(3)).toBe(6);
  });
});
