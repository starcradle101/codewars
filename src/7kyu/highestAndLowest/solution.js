export function highAndLow(numbers) {
  const numbersArray = numbers.split(' ').map((numChar) => parseInt(numChar));

  const maxNumber = Math.max(...numbersArray);
  const minNumber = Math.min(...numbersArray);

  return `${maxNumber} ${minNumber}`;
}
