const makeGatherBusinessDays = require('./makeGatherBusinessDays');

describe('Business days gathering', () => {
  let gatherBusinessDays;

  beforeEach(() => {
    gatherBusinessDays = makeGatherBusinessDays();
  });

  it('should gather business days when given a year and a month', () => {
    const days = gatherBusinessDays({ year: 2025, month: 8 });
    expect(days).toHaveLength(21);
    expect(days[3].format('YYYY-MM-DD')).toEqual('2025-08-06');
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

  it('should ignore days off', () => {
    const workDaysInMonthWithoutDaysOff = makeGatherBusinessDays({
      daysOff: ['2025-08-06'],
      format: 'YYYY-MM-DD'
    })({ year: 2025, month: 8 });

    const workDaysInMonth = makeGatherBusinessDays()({
      year: 2025,
      month: 8
    });

    expect(workDaysInMonth.length).not.toEqual(
      workDaysInMonthWithoutDaysOff.length
    );
  });
});
