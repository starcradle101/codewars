import { capitals } from './solution';

describe('Basic tests', () => {
  it('Testing for fixed tests', () => {
    expect(capitals('CodEWaRs')).toEqual([0, 3, 4, 6]);
  });
});
