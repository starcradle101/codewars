// https://www.codewars.com/kata/563cf89eb4747c5fb100001b

export function removeSmallest(numbers) {
  let answers = [...numbers];
  const minNum = Math.min(...answers);
  answers.splice(answers.indexOf(minNum), 1);
  return numbers.length === 0 ? [] : answers;
}
