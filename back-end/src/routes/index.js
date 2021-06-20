const adminRouter = require('./admin.routes');
const sessionRouter = require('./session.routes');
const usersRouter = require('./users.routes');
const directorsRouter = require('./directors.routes');
const teachersRouter = require('./teachers.routes');
const notFound = require('./notFound.routes');

module.exports = {
  adminRouter,
  usersRouter,
  sessionRouter,
  directorsRouter,
  teachersRouter,
  notFound,
};
