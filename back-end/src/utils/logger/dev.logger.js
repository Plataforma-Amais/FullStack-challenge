const { createLogger, transports, format } = require('winston');

const { combine, timestamp: timeStamp, printf, colorize } = format;

const timestampFormat = 'DD-MM-YYYY HH:mm:ss';

const consoleFormat = printf(({ level, message, timestamp, stack }) => {
  const log = stack || JSON.stringify(message);
  return `${timestamp} ${level}: ${log}`;
});

const fileFormatReq = printf(({ message, timestamp }) => (
  `timestamp: ${timestamp}, request: ${JSON.stringify(message)}`
));

const fileFormatWarning = printf(({ message, timestamp }) => {
  const { statusCode: status, customCode: code, customMessage } = message.error;
  return `${timestamp} WARNING => STATUS: ${status}, CODE: ${code}, MESSAGE: ${customMessage}`;
});

const fileFormatErr = printf(({ message, timestamp }) => {
  const { statusCode: status, customCode: code, err } = message.error;
  const { message: mess, stack } = err;
  return `${timestamp} ERROR => STATUS: ${status}, CODE: ${code}, MESSAGE: ${mess}, STACK:${stack}`;
});

const devConsole = createLogger({
  format: combine(
    colorize(),
    timeStamp({ format: timestampFormat }),
    format.errors({ stack: true }),
    consoleFormat,
  ),
  defaultMeta: { service: 'user-service' },
  transports: [new transports.Console()],
});

const devRequestsLogger = createLogger({
  transports: [
    new transports.File({
      filename: './logs/dev/devRequest.log',
      level: 'http',
      format: combine(
        timeStamp({ format: timestampFormat }),
        fileFormatReq,
      ),
    }),
  ],
});

const devWarningLogger = createLogger({
  transports: [
    new transports.File({
      filename: './logs/dev/devWarning.log',
      level: 'warn',
      format: combine(
        timeStamp({ format: timestampFormat }),
        fileFormatWarning,
      ),
    }),
  ],
});

const devErrorLogger = createLogger({
  transports: [
    new transports.File({
      filename: './logs/dev/devError.log',
      level: 'error',
      format: combine(
        timeStamp(),
        fileFormatErr,
      ),
    }),
  ],
});

function buildDevLoggers() {
  return {
    customConsole: devConsole,
    requestsLogger: devRequestsLogger,
    warningLogger: devWarningLogger,
    errorLogger: devErrorLogger,
  };
}

module.exports = buildDevLoggers;
