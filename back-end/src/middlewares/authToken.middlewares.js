const { users } = require('../models');
const { verifyToken } = require('../security');

const error = {
  noToken: 'C_ERR_NO_TOKEN',
  invalidCredentials: 'C_ERR_INVALID_CRED',
};

const tokenError = {
  statusCode: 401,
  customCode: 'C_ERROR_TOKEN',
  customMessage: 'Authentication error. Please contact support or try again later.',
};

module.exports = async (req, _res, next) => {
  try {
    const { authorization: token } = req.headers;
    if (!token) throw new Error(error.noToken);
    const { sub } = verifyToken(token);
    req.userId = sub;
    const profile = await users.getUserProfile(sub);
    console.log('midw: ', sub);
    if (!profile) throw new Error(error.invalidCredentials);
    req.userProfile = profile;
    return next();
  } catch (err) {
    next({ ...tokenError, err });
  }
};
