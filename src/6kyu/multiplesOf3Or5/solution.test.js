import { solution } from './solution';

function test(n, expected) {
  it(`returns ${expected} for n=${n}`, () => {
    expect(solution(n)).toBe(expected);
  });
}

describe('basic tests', () => {
  test(10, 23);
});
