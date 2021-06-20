const schoolsError = {
  statusCode: 500,
  customCode: 'ERROR_SCHOOLS',
  customMessage: 'Error in schools. Please contact support or try again later.',
};

const directorError = {
  statusCode: 403,
  customCode: 'ERROR_SCHOOLS',
  customMessage: 'Error in schools. User is not director of school.',
};

module.exports = {
  schoolsError,
  directorError,
};
