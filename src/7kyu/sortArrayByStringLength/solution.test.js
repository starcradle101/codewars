import { sortByLength } from './solution';

describe('Example tests', () => {
  it('Test 1', () => {
    expect(sortByLength(['Beg', 'Life', 'I', 'To'])).toEqual([
      'I',
      'To',
      'Beg',
      'Life',
    ]);
  });

  it('Test 2', () => {
    expect(sortByLength(['', 'Moderately', 'Brains', 'Pizza'])).toEqual([
      '',
      'Pizza',
      'Brains',
      'Moderately',
    ]);
  });

  it('Test 3', () => {
    expect(sortByLength(['Longer', 'Longest', 'Short'])).toEqual([
      'Short',
      'Longer',
      'Longest',
    ]);
  });
});
