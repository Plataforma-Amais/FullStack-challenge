const {
  isNameInvalid,
  isEmailValid,
  isBlank,
  isLessThan,
  isNotString,
  notInclude,
} = require('../helpers');
const { profileTypes } = require('../resources');

const error = {
  nameFieldRequired: 'C_ERR_NAME_REQ',
  invalidName: 'C_ERR_NAME_INVALID',
  emailFieldRequired: 'C_ERR_EMAIL_REQ',
  invalidEmail: 'C_ERR_EMAIL_INVALID',
  invalidPassword: 'C_ERR_PASS_INVALID',
  passwordFieldRequired: 'C_ERR_PASS_REQ',
  invalidProfile: 'C_ERR_PROFILE_INVALID',
  emailNotAvailable: 'C_ERR_EMAIL_UNAVAILABLE',
};

const validateUserName = (name) => {
  switch (true) {
    case isBlank(name): throw new Error(error.nameFieldRequired);
    case isNameInvalid(name): throw new Error(error.invalidName);
    default: return null;
  }
};

const validateEmailFormat = (email) => {
  switch (true) {
    case isBlank(email): throw new Error(error.emailFieldRequired);
    case isEmailValid(email): throw new Error(error.invalidEmail);
    default: return null;
  }
};

const validatePasswordField = (pass) => {
  switch (true) {
    case isBlank(pass): throw new Error(error.passwordFieldRequired);
    case isLessThan(pass.length, 6): throw new Error(error.invalidPassword);
    default: return null;
  }
};

const validateProfile = (profile) => {
  if (
    isNotString(profile) || notInclude(profileTypes, profile)
   ) throw new Error(error.invalidProfile);
};

const verifyEmailAvaibility = (object) => {
  if (object) throw new Error(error.emailNotAvailable);
};

module.exports = {
  validateUserName,
  validateEmailFormat,
  validatePasswordField,
  validateProfile,
  verifyEmailAvaibility,
};
