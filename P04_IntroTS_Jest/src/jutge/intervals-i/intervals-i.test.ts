import { findIntersection } from './ intervals-i-P51126';

describe('Intervals (1)', () => {
  it('Jutge examples', () => {
    expect(findIntersection(20, 30, 10, 40)).toEqual([20,30]);
    expect(findIntersection(10, 20, 10, 20)).toEqual([10,20]);
    expect(findIntersection(20, 30, 10, 20)).toEqual([20,20]);
    expect(findIntersection(10, 20, 30, 40)).toEqual([]);
  })
});
