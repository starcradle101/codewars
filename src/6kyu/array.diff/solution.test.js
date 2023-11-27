import { arrayDiff } from './solution';

describe('arrayDiff function', () => {
  it('should return the difference between two arrays', () => {
    expect(arrayDiff([1, 2], [1])).toEqual([2]);
    expect(arrayDiff([1, 2, 2], [1])).toEqual([2, 2]);
    expect(arrayDiff([1, 2, 2], [2])).toEqual([1]);
    expect(arrayDiff([1, 2, 2], [])).toEqual([1, 2, 2]);
    expect(arrayDiff([], [1, 2])).toEqual([]);
    expect(arrayDiff([1, 2, 3], [1, 2])).toEqual([3]);
  });
});
