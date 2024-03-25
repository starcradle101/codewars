// https://www.codewars.com/kata/534ea96ebb17181947000ada

export function breakChocolate(n, m) {
  if (n < 1 || m < 1) return 0;

  return n * m - 1;
}

// 단순히 (n - 1) * (m - 1)이 아닌 이유:
// 초콜렛을 자르는 것이 아니라 하나씩 쪼개는 것이기 때문
