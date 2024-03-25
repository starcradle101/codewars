import { breakChocolate } from './solution';

describe('Tests', () => {
  it('test', () => {
    expect(breakChocolate(5, 5)).toBe(24);
    expect(breakChocolate(1, 1)).toBe(0);
  });
});
