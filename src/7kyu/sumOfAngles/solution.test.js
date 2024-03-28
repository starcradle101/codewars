import { angle } from './solution';

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    expect(angle(3)).toBe(180);
    expect(angle(4)).toBe(360);
  });
});
