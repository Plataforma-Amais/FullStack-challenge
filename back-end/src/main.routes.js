require('dotenv/config');
const express = require('express');
const { log, handleError } = require('./middlewares');

const {
  adminRouter,
  usersRouter,
  schoolsRouter,
  sessionRouter,
  notFound,
} = require('./routes');

const routes = express.Router();

routes.use('/school', schoolsRouter);
routes.use('/login', sessionRouter);
routes.use('/user', usersRouter);
routes.use('/admin', adminRouter);
routes.use('*', notFound);

routes.use(log);
routes.use(handleError);

module.exports = routes;
