import { dontGiveMeFive } from './solution';

describe('KataTests', () => {
  it('exampleTests', () => {
    expect(dontGiveMeFive(1, 9)).toEqual(8);
    expect(dontGiveMeFive(4, 17)).toEqual(12);
  });
});
