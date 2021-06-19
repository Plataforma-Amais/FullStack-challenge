const registerError = {
  statusCode: 500,
  customCode: 'ERROR_USER_REGISTER',
  customMessage: 'Register failed. Please contact support or try again later.',
};

const profileError = {
  statusCode: 500,
  customCode: 'ERROR_USER_PROFILE',
  customMessage: 'Update profile failed. Please contact support or try again later.',
};

module.exports = {
  registerError,
  profileError,
};
