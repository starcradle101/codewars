// https://www.codewars.com/kata/5390bac347d09b7da40006f6

export function toJadenCase(str) {
  const answer = str
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1);
    })
    .join(' ');

  return answer;
}
