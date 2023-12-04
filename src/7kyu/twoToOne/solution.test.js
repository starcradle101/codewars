import { longest } from './solution';

describe('longest', () => {
  it('Basic tests', () => {
    expect(longest('aretheyhere', 'yestheyarehere')).toBe('aehrsty');
    expect(longest('loopingisfunbutdangerous', 'lessdangerousthancoding')).toBe(
      'abcdefghilnoprstu',
    );
    expect(longest('inmanylanguages', 'theresapairoffunctions')).toBe(
      'acefghilmnoprstuy',
    );
  });
});
