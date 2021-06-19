const authToken = require('./authToken.middlewares');
const log = require('./log.middlewares');
const handleError = require('./handleError.middlewares');
const authAdmin = require('./authAdmin.middlewares');

module.exports = {
  authToken,
  log,
  handleError,
  authAdmin,
};
