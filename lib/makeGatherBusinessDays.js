const _ = require('lodash');
const moment = require('moment-business-days');

const DATE_FORMAT = 'YYYY-M-DD';

module.exports = config => {
  const { daysOff, format } = _.defaults(config, {
    daysOff: [],
    format: DATE_FORMAT
  });
  moment.updateLocale('us', {
    holidays: daysOff,
    holidayFormat: format
  });

  return yearAndMonth => {
    const { year, month } = _.defaults(yearAndMonth, { year: 2019, month: 1 });
    checkYearAndMonth(year, month);
    return moment(`${year}-${month}-01`, DATE_FORMAT).monthBusinessDays();

    function checkYearAndMonth(year, month) {
      if (!_.includes(_.range(1, 12), month)) {
        throw new Error(`${month} is not a valid month number`);
      }

      if (!_.includes(_.range(2000, 3000), year)) {
        throw new Error(`${year} is not a valid year number`);
      }
    }
  };
};
