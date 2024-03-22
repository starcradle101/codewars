// https://www.codewars.com/kata/542c0f198e077084c0000c2e

export function getDivisorsCnt(n) {
  const biggestDivisor = Math.floor(n / 2);
  let answer = 0;
  for (let i = 1; i <= biggestDivisor; i += 1) {
    if (n % i === 0) answer += 1;
  }

  return answer + 1;
}

// 위 방법을 사용해도 실행 시간 초과 오류가 발생
// GPT를 사용해서 풀기
// 소인수 분해를 사용하면 더 효율적으로 문제를 풀 수 있음
// let count = 1;
//   for (let i = 2; i * i <= n; i++) {
//     let exp = 0;
//     while (n % i === 0) {
//       exp++;
//       n /= i;
//     }
//     count *= exp + 1;
//   }
//   if (n > 1) count *= 2;
//   return count;
