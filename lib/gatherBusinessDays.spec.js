const gatherBusinessDays = require('./gatherBusinessDays');

describe('Business days gathering', () => {
  it('should gather business days when given a year and a month', () => {
    expect(gatherBusinessDays({ year: 2018, month: 1 })).toHaveLength(23);
  });
});
