// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/javascript

export function duplicateCount(text) {
  const filteredText = text.toLowerCase();
  let duplicateObj = {};

  for (let idx = 0; idx < filteredText.length; idx += 1) {
    duplicateObj[filteredText[idx]] === undefined
      ? (duplicateObj[filteredText[idx]] = 1)
      : (duplicateObj[filteredText[idx]] += 1);
  }

  if (Object.keys(duplicateObj).length === 0) {
    return 0;
  }

  return Object.values(duplicateObj).filter((el) => el > 1).length;
}
