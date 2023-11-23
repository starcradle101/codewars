export function solution(number) {
  let answer = 0;
  for (let i = 1; i < number; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      answer += i;
    }
  }
  return answer;
}
