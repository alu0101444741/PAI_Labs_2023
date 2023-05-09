import { collatzSequence } from './collatz-sequence-P80660';

describe('Collatz Sequence', () => {
  it('Jutge examples', () => {
    expect(collatzSequence(3)).toEqual(7);
    expect(collatzSequence(1)).toEqual(0);
    expect(collatzSequence(40)).toEqual(8);
  })
});
