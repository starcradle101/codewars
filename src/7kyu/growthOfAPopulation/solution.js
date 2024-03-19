export function nbYear(p0, percent, aug, p) {
  let answer = 0;
  let population = p0;
  while (population < p) {
    population = Math.floor(population * (1 + percent / 100) + aug);
    answer++;
  }

  return answer;
}
