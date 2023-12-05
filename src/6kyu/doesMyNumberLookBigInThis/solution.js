// https://www.codewars.com/kata/5287e858c6b5a9678200083c

export function narcissistic(value) {
  let transformedNarcissistic = 0;
  const digitOfValue = value.toString().length;
  value
    .toString()
    .split('')
    .forEach((num) => {
      transformedNarcissistic += Math.pow(+num, digitOfValue);
    });

  return value === transformedNarcissistic ? true : false;
}
