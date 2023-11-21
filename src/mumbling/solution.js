// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

export function accum(s) {
  const answer = [...s]
    .map((char, index) => {
      return char.toUpperCase() + char.toLowerCase().repeat(index);
    })
    .join('-');

  return answer;
}
