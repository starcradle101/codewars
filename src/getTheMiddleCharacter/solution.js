// https://www.codewars.com/kata/56747fd5cb988479af000028
export function getMiddle(s) {
  if (s.length % 2 === 1) {
    return s.slice(Math.round(s.length / 2) - 1, Math.round(s.length / 2));
  }

  return s.slice(Math.round(s.length / 2) - 1, Math.round(s.length / 2) + 1);
}
