// https://www.codewars.com/kata/546f922b54af40e1e90001da

export function alphabetPosition(text) {
  const regex = /[a-zA-Z]/g;
  const filteredAlphabet = text
    .split('')
    .filter((char) => char.match(regex))
    .join('')
    .toLowerCase();

  let answer = [];
  for (let i = 0; i < filteredAlphabet.length; i += 1) {
    answer.push(filteredAlphabet.charCodeAt(i) - 96);
  }

  return answer.join(' ');
}
