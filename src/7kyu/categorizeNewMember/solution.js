export function openOrSenior(data) {
  let categorizedMembers = [];
  for (let member of data) {
    const category = member[0] >= 55 && member[1] > 7 ? 'Senior' : 'Open';
    categorizedMembers.push(category);
  }

  return categorizedMembers;
}
