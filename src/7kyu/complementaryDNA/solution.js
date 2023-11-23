export function DNAStrand(dna) {
  const answer = dna
    .split('')
    .map((symbol) => {
      switch (symbol) {
        case 'A':
          return 'T';
        case 'T':
          return 'A';
        case 'C':
          return 'G';
        case 'G':
          return 'C';
      }
    })
    .join('');

  return answer;
}
