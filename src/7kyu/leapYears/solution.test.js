import { isLeapYear } from './solution';

describe('Example tests', () => {
  it('Year 2020 is a leap year', () => {
    expect(isLeapYear(2020)).toBe(true);
  });

  it('Year 2000 is a leap year', () => {
    expect(isLeapYear(2000)).toBe(true);
  });

  it('Year 2015 is not a leap year', () => {
    expect(isLeapYear(2015)).toBe(false);
  });

  it('Year 2100 is not a leap year', () => {
    expect(isLeapYear(2100)).toBe(false);
  });
});
