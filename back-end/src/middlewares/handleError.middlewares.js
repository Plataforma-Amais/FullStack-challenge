require('dotenv/config');
const { errorLogger, warningLogger } = require('../utils/logger');
const ERROR = require('./helpers/error');

const checkForCustomError = (message) => {
  const arr = message.split('_');
  return arr[0] === 'C' && arr[1] === 'ERR';
};

const handleErrorObject = (error, boolean) => {
  if (!boolean) return error;
  return { ...ERROR[error.err.message], err: error.err.stack };
};

const handleLogs = (error, boolean) => {
  if (!boolean) return errorLogger.error({ error });
  warningLogger.warn({ error });
};

module.exports = (error, _req, res, _next) => {
  const isCustomError = checkForCustomError(error.err.message);
  const errorObject = handleErrorObject(error, isCustomError);
  if (process.env.NODE_ENV !== 'test') {
    handleLogs(errorObject, isCustomError);
  }

  const { customMessage, customCode } = errorObject;
  const statusCode = errorObject.statusCode || '500';
  const ERR = {
    message: customMessage || 'Erro interno',
    code: customCode || 'INTERNAL_ERROR',
  };

  res.status(statusCode).json(ERR);
};
