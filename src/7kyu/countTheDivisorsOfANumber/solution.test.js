import { getDivisorsCnt } from './solution';

describe('Tests', () => {
  it('test', () => {
    expect(getDivisorsCnt(1)).toBe(1);
    expect(getDivisorsCnt(10)).toBe(4);
    expect(getDivisorsCnt(11)).toBe(2);
    expect(getDivisorsCnt(54)).toBe(8);
  });
});
