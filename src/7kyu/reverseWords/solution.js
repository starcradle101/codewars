// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/

export function reverseWords(str) {
  let currentWord = [];
  let reversedWords = '';

  for (let char of str) {
    if (char === ' ') {
      reversedWords = reversedWords.concat(currentWord.reverse().join(''));
      currentWord = [];
      reversedWords = reversedWords.concat(' ');
    } else {
      currentWord.push(char);
    }
  }

  // 마지막으로 남아있는 단어가 있을 수 있음
  reversedWords = reversedWords.concat(currentWord.reverse().join(''));

  return reversedWords;
}
