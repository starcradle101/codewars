// https://www.codewars.com/kata/57cc981a58da9e302a000214

export function smallEnough(a, limit) {
  return !a.some((e) => e > limit);
}

// Math.max를 사용해서 풀기
// return Math.max(...a) <= limit
