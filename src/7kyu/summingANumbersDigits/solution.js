// https://www.codewars.com/kata/52f3149496de55aded000410

export function sumDigits(number) {
  const absNum = Math.abs(number);
  const arrayAbs = absNum
    .toString()
    .split('')
    .map((char) => parseInt(char));
  return arrayAbs.reduce((acc, curr) => acc + curr, 0);
}
