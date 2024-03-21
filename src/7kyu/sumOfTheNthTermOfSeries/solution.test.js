import { SeriesSum } from './solution';

describe('Sample tests', () => {
  it('n = 1', () => {
    let actual = SeriesSum(1);
    checkReturnValue(actual);
    expect(actual).toBe('1.00');
  });

  it('n = 2', () => {
    expect(SeriesSum(2)).toBe('1.25');
  });

  it('n = 3', () => {
    expect(SeriesSum(3)).toBe('1.39');
  });

  it('n = 4', () => {
    expect(SeriesSum(4)).toBe('1.49');
  });
});

function checkReturnValue(actual) {
  expect(actual).toBeDefined();
}
