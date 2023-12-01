// https://www.codewars.com/kata/517abf86da9663f1d2000003

export function toCamelCase(str) {
  if (str === '') return str;

  const splitStr = str.split(/[-_]/g);

  let answer = splitStr[0];
  for (let i = 1; i < splitStr.length; i += 1) {
    answer += splitStr[i][0].toUpperCase() + splitStr[i].slice(1);
  }

  return answer;
}
