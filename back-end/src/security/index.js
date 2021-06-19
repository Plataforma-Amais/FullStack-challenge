const jwt = require('jsonwebtoken');
const securityConfig = require('./configs.security');

const generateToken = (id, role) => {
  const payload = {
    iss: 'trybeer-api',
    aud: 'trybeer-api',
    sub: id,
    role,
  };

  return jwt.sign(payload, securityConfig.jwt.secret, securityConfig.jwt.options);
};

const verifyToken = (token) => {
  // console.log('verify token: ', token);
  try {
    return jwt.verify(token, securityConfig.jwt.secret);
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
