import { getMiddle } from './solution';

describe('GetMiddle', () => {
  it('Tests', () => {
    expect(getMiddle('test')).toBe('es');
    expect(getMiddle('testing')).toBe('t');
    expect(getMiddle('middle')).toBe('dd');
    expect(getMiddle('A')).toBe('A');
  });
});
