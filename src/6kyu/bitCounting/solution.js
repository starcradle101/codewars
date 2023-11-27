// https://www.codewars.com/kata/526571aae218b8ee490006f4/javascript

export const countBits = (n) =>
  n
    .toString(2)
    .split('')
    .reduce((acc, curr) => +acc + +curr, 0);
