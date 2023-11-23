import { DNAStrand } from './solution';

describe('DNAStrand function', () => {
  test('transforms "AAAA" to "TTTT"', () => {
    expect(DNAStrand('AAAA')).toBe('TTTT');
  });

  test('transforms "ATTGC" to "TAACG"', () => {
    expect(DNAStrand('ATTGC')).toBe('TAACG');
  });

  test('transforms "GTAT" to "CATA"', () => {
    expect(DNAStrand('GTAT')).toBe('CATA');
  });
});
