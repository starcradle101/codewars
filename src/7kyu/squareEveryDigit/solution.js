export function squareDigits(num) {
  const splittedNum = [...num.toString()];
  const squaredNum = splittedNum.map((numChar) => parseInt(numChar) ** 2);
  const answer = parseInt(squaredNum.join(''));

  return answer;
}
