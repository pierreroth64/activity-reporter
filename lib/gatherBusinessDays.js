const moment = require('moment-business-days');

const DATE_FORMAT = 'YYYY-MM-DD';

module.exports = yearAndMonth => {
  const { year, month } = yearAndMonth;
  const days = moment(`${year}-${month}-01`, DATE_FORMAT).monthBusinessDays();
  return days;
};
