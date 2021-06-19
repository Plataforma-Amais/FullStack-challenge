const {
  validateUserName,
  validateEmailFormat,
  validatePasswordField,
  validateProfile,
  verifyEmailAvaibility,
} = require('./utils');

module.exports = ({ name, email, password, profile }, isEmailAvaible) => {
  validateUserName(name);
  validateEmailFormat(email);
  validatePasswordField(password);
  validateProfile(profile);
  verifyEmailAvaibility(isEmailAvaible);
};
