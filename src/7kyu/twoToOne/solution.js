// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

export function longest(s1, s2) {
  const combinedStringSet = new Set(s1 + s2);
  return [...combinedStringSet].sort().join('');
}
