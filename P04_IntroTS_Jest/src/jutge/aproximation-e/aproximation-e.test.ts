import { taylorSeries } from './aproximation-e-P11916';

describe('Aproximation of e', () => {
  it('Jutge examples', () => {
    expect(taylorSeries(0)).toEqual(0.0000000000);
    expect(taylorSeries(1)).toEqual(1.0000000000);
    expect(taylorSeries(3)).toEqual(2.5000000000);
    expect(Number(taylorSeries(10).toFixed(10))).toEqual(2.7182818285);
  })
});
