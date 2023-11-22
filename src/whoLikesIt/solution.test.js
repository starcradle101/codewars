import { likes } from './solution';

describe('likes function', () => {
  test.each([
    [[], 'no one likes this'],
    [['Peter'], 'Peter likes this'],
    [['Jacob', 'Alex'], 'Jacob and Alex like this'],
    [['Max', 'John', 'Mark'], 'Max, John and Mark like this'],
    [['Alex', 'Jacob', 'Mark', 'Max'], 'Alex, Jacob and 2 others like this'],
  ])('returns correct text for input %p', (input, expected) => {
    expect(likes(input)).toEqual(expected);
  });
});
