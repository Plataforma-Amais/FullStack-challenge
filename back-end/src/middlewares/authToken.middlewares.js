const { verifyToken } = require('../security');

const noToken = 'C_ERR_NO_TOKEN';

const tokenError = {
  statusCode: 401,
  customCode: 'C_ERROR_TOKEN',
  customMessage: 'Authentication error. Please, contact support or try again later.',
};

module.exports = (req, _res, next) => {
  try {
    const { authorization: token } = req.headers;
    if (!token) throw new Error(noToken);
    const { sub, role } = verifyToken(token);
    req.userId = sub;
    req.userRole = role;
    return next();
  } catch (err) {
    next({ ...tokenError, err });
  }
};
