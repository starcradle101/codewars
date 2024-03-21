import { removeSmallest } from './solution';

describe('removeSmallest', () => {
  it('works for the examples', () => {
    expect(removeSmallest([1, 2, 3, 4, 5])).toEqual([2, 3, 4, 5]);
    expect(removeSmallest([5, 3, 2, 1, 4])).toEqual([5, 3, 2, 4]);
    expect(removeSmallest([2, 2, 1, 2, 1])).toEqual([2, 2, 2, 1]);
    expect(removeSmallest([])).toEqual([]);
  });

  it('returns [] if the list has only one element', () => {
    for (let i = 0; i < 10; ++i) {
      let x = Math.floor(Math.random() * 400);
      expect(removeSmallest([x])).toEqual([]);
    }
  });

  function randomArray(length) {
    return Array.from({ length: length }, () =>
      Math.floor(Math.random() * 400),
    );
  }

  it('returns a list that misses only one element', () => {
    for (let i = 0; i < 10; ++i) {
      let arr = randomArray(Math.floor(Math.random() * 10) + 1);
      let l = arr.length;
      expect(removeSmallest(arr).length).toBe(l - 1);
    }
  });
});
