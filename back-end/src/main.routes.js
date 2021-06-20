require('dotenv/config');
const express = require('express');
const { log, handleError } = require('./middlewares');

const {
  adminRouter,
  usersRouter,
  sessionRouter,
  directorsRouter,
  teachersRouter,
  notFound,
} = require('./routes');

const routes = express.Router();

routes.use('/school', directorsRouter);
routes.use('/teachers', teachersRouter);
routes.use('/login', sessionRouter);
routes.use('/user', usersRouter);
routes.use('/admin', adminRouter);
routes.use('*', notFound);

routes.use(log);
routes.use(handleError);

module.exports = routes;
