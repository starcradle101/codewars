// https://www.codewars.com/kata/545a4c5a61aa4c6916000755

export function gimme(triplet) {
  let orderedTriplet = [...triplet].sort((a, b) => a - b);
  return triplet.indexOf(orderedTriplet[1]);
}
