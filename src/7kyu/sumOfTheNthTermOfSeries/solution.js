//  https://www.codewars.com/kata/555eded1ad94b00403000071

export function SeriesSum(n) {
  if (n === 0) return (0).toFixed(2);

  let sum = 0;
  for (let i = 0; i < n; i += 1) {
    sum += 1 / (1 + i * 3);
  }

  return sum.toFixed(2);
}
