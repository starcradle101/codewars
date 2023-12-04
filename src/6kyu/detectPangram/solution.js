// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/

export function isPangram(string) {
  let answer = false;
  let alphabetObj = {};
  string
    .toLowerCase()
    .match(/[a-z]/g)
    .forEach((char) => {
      alphabetObj[char] === undefined
        ? (alphabetObj[char] = 1)
        : (alphabetObj[char] += 1);
    });

  if (Object.keys(alphabetObj).length === 26) answer = true;

  return answer;
}
