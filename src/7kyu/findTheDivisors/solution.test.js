import { divisors } from './solution';

describe('Tests', () => {
  it('test', () => {
    expect(divisors(15)).toEqual([3, 5]);
    expect(divisors(12)).toEqual([2, 3, 4, 6]);
    expect(divisors(13)).toBe('13 is prime');
  });
});
