import { number } from './solution';

describe('Tests', () => {
  it('test', () => {
    expect(number([])).toEqual([]);
    expect(number(['a', 'b', 'c'])).toEqual(['1: a', '2: b', '3: c']);
  });
});
