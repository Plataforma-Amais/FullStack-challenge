const { createLogger, transports, format } = require('winston');

const { combine, timestamp, json, errors } = format;

const customConsole = createLogger({
  format: combine(
    timestamp(),
    errors({ stack: true }),
    format.json(),
  ),
  defaultMeta: { service: 'user-service' },
  transports: [new transports.Console()],
});

const requestsLogger = createLogger({
  transports: [
    new transports.File({
      filename: './logs/requests.log',
      level: 'info',
      format: combine(
        timestamp(),
        json(),
      ),
    }),
  ],
});

const warningLogger = createLogger({
  transports: [
    new transports.File({
      filename: './logs/warning.log',
      level: 'warn',
      format: combine(
        timestamp(),
        json(),
      ),
    }),
  ],
});

const errorLogger = createLogger({
  transports: [
    new transports.File({
      filename: './logs/error.log',
      level: 'error',
      format: combine(
        timestamp(),
        json(),
      ),
    }),
  ],
});

function buildProdLoggers() {
  return { customConsole, requestsLogger, warningLogger, errorLogger };
}

module.exports = buildProdLoggers;
