const adminRouter = require('./admin.routes');
const sessionRouter = require('./session.routes');
const usersRouter = require('./users.routes');
const schoolsRouter = require('./schools.routes');
const notFound = require('./notFound.routes');

module.exports = {
  adminRouter,
  usersRouter,
  sessionRouter,
  schoolsRouter,
  notFound,
};
