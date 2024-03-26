// https://www.codewars.com/kata/563f037412e5ada593000114

export function calculateYears(principal, interest, tax, desired) {
  let year = 0;
  let sum = principal;
  while (sum < desired) {
    sum = sum * (1 + interest - interest * tax);
    year += 1;
  }

  return year;
}

// 로그를 사용해서 푸는 방법
// function calculateYears(principal, interest, tax, desired) {
//   return Math.ceil(
//     Math.log(desired / principal) /
//     Math.log(1 + interest * (1 - tax))
//   );
// }
