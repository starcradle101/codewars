import { narcissistic } from './solution';

describe('Example tests', () => {
  function dotest(input, expected) {
    const actual = narcissistic(input);
    expect(actual).toBe(expected);
  }

  it('Narcissistic numbers', () => {
    dotest(7, true);
    dotest(153, true);
  });

  it('Not narcissistic numbers', () => {
    dotest(122, false);
    dotest(487, false);
  });
});
