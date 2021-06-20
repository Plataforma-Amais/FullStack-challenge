const authToken = require('./authToken.middlewares');
const log = require('./log.middlewares');
const handleError = require('./handleError.middlewares');
const authAdmin = require('./authAdmin.middlewares');
const authDirector = require('./authDirector.middlewares');
const authTeacher = require('./authTeacher.middlewares');

module.exports = {
  authToken,
  log,
  handleError,
  authAdmin,
  authDirector,
  authTeacher,
};
