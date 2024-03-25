import { nbDig } from './solution';

describe('nbDig', () => {
  it('Basic tests', () => {
    expect(nbDig(5750, 0)).toBe(4700);
    expect(nbDig(11011, 2)).toBe(9481);
    expect(nbDig(12224, 8)).toBe(7733);
    expect(nbDig(11549, 1)).toBe(11905);
  });
});
