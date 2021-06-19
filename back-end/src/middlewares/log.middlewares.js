const { customConsole, requestsLogger } = require('../utils/logger');

module.exports = async (req, _res, next) => {
  const log = {
    type: 'request',
    method: req.method,
    route: req.originalUrl,
  };

  customConsole.info(log);
  requestsLogger.info(log);
  next();
};
