const moment = require('moment');

// Generate today's date in the format you want (e.g., "29th July")
const getFormattedDate = () => {
    return moment().format('Do MMMM YYYY');
};

module.exports = { getFormattedDate };