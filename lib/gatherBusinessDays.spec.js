const gatherBusinessDays = require('./gatherBusinessDays');

describe('Business days gathering', () => {
  it('should gather business days when given a year and a month', () => {
    expect(gatherBusinessDays({ year: 2018, month: 1 })).toHaveLength(23);
  });

  it('should check for month format', () => {
    expect(() => {
      gatherBusinessDays({ year: 2018, month: 34 });
    }).toThrow(/34 is not a valid month number/);
  });

  it('should check for year format', () => {
    expect(() => {
      gatherBusinessDays({ year: 1023, month: 1 });
    }).toThrow(/1023 is not a valid year number/);
  });
});
