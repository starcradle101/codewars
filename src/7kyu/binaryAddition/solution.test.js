import { addBinary } from './solution';

describe('addBinary', () => {
  it('Should return something that is not falsy', () => {
    const results1 = addBinary(1, 2);
    expect(results1).toBeTruthy();
  });

  it('Should return "11"', () => {
    const results1 = addBinary(1, 2);
    expect(results1).toBe('11');
  });
});
