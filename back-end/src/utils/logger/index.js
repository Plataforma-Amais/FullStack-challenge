const buildDevLoggers = require('./dev.logger');
const buildProdLoggers = require('./prod.logger');

const loggers = (process.env.NODE_ENV === 'development')
  ? buildDevLoggers()
  : buildProdLoggers();

module.exports = loggers;
