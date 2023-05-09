import { collatzPseudoSequence } from './collatz-pseudo-sequence-P91173';

describe('Collatz PseudoSequence', () => {
  it('Jutge examples', () => {
    expect(collatzPseudoSequence(1, 5, 8)).toEqual(3);
    expect(collatzPseudoSequence(0, 5, 0)).toEqual(1);
    expect(collatzPseudoSequence(10, 11, 3)).toEqual(1);
    expect(collatzPseudoSequence(7, 3, 6)).toEqual(35);
    expect(collatzPseudoSequence(1, 999, 1000000)).toEqual(1501002);
    expect(collatzPseudoSequence(433, 805, 215476)).toEqual(490);
    expect(collatzPseudoSequence(0, 1, 333333)).toEqual(3);
  })
});
