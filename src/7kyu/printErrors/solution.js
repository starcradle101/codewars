// https://www.codewars.com/kata/56541980fa08ab47a0000040/javascript
export function printerError(s) {
  let regexMatch = s.match(/[^a-m]/gi);

  if (regexMatch === null) {
    regexMatch = '';
  }
  return `${regexMatch.length}/${s.length}`;
}
