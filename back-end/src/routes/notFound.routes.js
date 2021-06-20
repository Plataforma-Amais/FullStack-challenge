const express = require('express');

const notFound = express.Router();

const routeNotFound = 'C_ERR_NOT_FOUND';

notFound.use('*', (_req, _res, next) => {
  try {
    throw new Error(routeNotFound);
  } catch (err) {
    next({ err });
  }
});

module.exports = notFound;
