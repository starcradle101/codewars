// https://www.codewars.com/kata/526c7363236867513f0005ca

export function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
