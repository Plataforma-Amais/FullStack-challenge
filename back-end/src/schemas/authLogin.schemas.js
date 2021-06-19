const { validateEmailField } = require('./utils');
const { isBlank, isNotEqual } = require('./helpers');

const error = {
  invalidCredentials: 'C_ERR_INVALID_CRED',
  passwordFieldRequired: 'C_ERR_PASS_REQ',
  userNotFound: 'C_ERR_USER_NOT_FOUND',
};

const validateLogin = (email, pass, user) => {
  validateEmailField(email);
  if (isBlank(pass)) throw new Error(error.passwordFieldRequired);
  if (isBlank(user)) throw new Error(error.userNotFound);
};

const authUser = (email, pass, user) => {
  switch (true) {
    case isNotEqual(email, user.email): throw new Error(error.invalidCredentials);
    case isNotEqual(pass, user.password): throw new Error(error.invalidCredentials);
    default: return null;
  }
};

module.exports = (email, pass, user) => {
  validateLogin(email, pass, user);
  authUser(email, pass, user);
};
