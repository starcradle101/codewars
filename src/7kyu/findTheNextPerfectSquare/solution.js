export function findNextSquare(sq) {
  let answer = 0;
  if (Math.sqrt(sq) === Math.floor(Math.sqrt(sq))) {
    let currentSq = sq;
    do {
      currentSq += 1;
    } while (Math.sqrt(currentSq) !== Math.floor(Math.sqrt(currentSq)));

    answer = currentSq;
  } else {
    answer = -1;
  }

  return answer;
}
