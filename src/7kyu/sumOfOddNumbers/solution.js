// https://www.codewars.com/kata/55fd2d567d94ac3bc9000064

export function rowSumOddNumbers(n) {
  function calculateNthTerm(n) {
    if (n === 1) return 1;
    let previousTerm = calculateNthTerm(n - 1);
    return previousTerm + 2 * (n - 1);
  }

  let sum = 0;
  let firstOddOfRow = calculateNthTerm(n);

  for (let i = 0; i < n; i += 1) {
    sum += firstOddOfRow + 2 * i;
  }

  return sum;
}
