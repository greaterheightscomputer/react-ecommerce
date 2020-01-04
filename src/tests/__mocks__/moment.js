const moment = require.requireActual('moment'); //its will sync the real moment with manual moment

export default (timestamp = 0) => {
    return moment(timestamp);
};