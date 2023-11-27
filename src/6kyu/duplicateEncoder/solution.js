// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/javascript

export function duplicateEncode(word) {
  const lowerCasedWord = word.toLowerCase();
  let duplicateObj = {};
  let answer = '';

  for (let idx = 0; idx < lowerCasedWord.length; idx += 1) {
    duplicateObj[lowerCasedWord[idx]] === undefined
      ? (duplicateObj[lowerCasedWord[idx]] = 1)
      : (duplicateObj[lowerCasedWord[idx]] += 1);
  }

  for (let idx = 0; idx < lowerCasedWord.length; idx += 1) {
    duplicateObj[lowerCasedWord[idx]] > 1 ? (answer += ')') : (answer += '(');
  }

  return answer;
}
