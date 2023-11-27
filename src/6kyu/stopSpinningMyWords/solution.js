// https://www.codewars.com/kata/5264d2b162488dc400000001/javascript

export function spinWords(string) {
  const stringArr = string.split(' ');

  const answer = stringArr
    .map((word) => {
      if (word.length >= 5) {
        return word.split('').reverse().join('');
      }
      return word;
    })
    .join(' ');

  return answer;
}
