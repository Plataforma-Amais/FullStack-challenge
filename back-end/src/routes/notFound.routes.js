const express = require('express');
const { StatusCodes } = require('http-status-codes');

const notFound = express.Router();

const errorNotFound = {
  statusCode: 404,
  customCode: 'C_ERR_NOT_FOUND',
  message: 'Not Found',
};

notFound.use('*', (_req, res) => res.status(StatusCodes.NOT_FOUND).json(errorNotFound));

module.exports = notFound;
