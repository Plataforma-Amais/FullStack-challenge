module.exports = {
  C_ERR_USER_NOT_FOUND: {
    statusCode: 404,
    customCode: 'C_ERR_USER_NOT_FOUND',
    customMessage: 'Login failed. User not found.',
  },
  C_ERR_SALE_NOT_FOUND: {
    statusCode: 404,
    customCode: 'C_ERR_SALE_NOT_FOUND',
    customMessage: 'Error: sale not found.',
  },
  C_ERR_INVALID_CRED: {
    statusCode: 401,
    customCode: 'C_ERR_INVALID_CRED',
    customMessage: 'Login failed. Invalid credentials.',
  },
  C_ERR_PASS_REQ: {
    statusCode: 400,
    customCode: 'C_ERR_PASS_REQ',
    customMessage: 'Error: password field is required.',
  },
  C_ERR_PASS_INVALID: {
    statusCode: 400,
    customCode: 'C_ERR_PASS_INVALID',
    customMessage: 'Error: password must be at least 6 characters.',
  },
  C_ERR_EMAIL_INVALID: {
    statusCode: 400,
    customCode: 'C_ERR_EMAIL_INVALID',
    customMessage: 'Email must be at a valid format.',
  },
  C_ERR_EMAIL_REQ: {
    statusCode: 400,
    customCode: 'C_ERR_EMAIL_REQ',
    customMessage: 'Email field is required.',
  },
  C_ERR_NAME_REQ: {
    statusCode: 400,
    customCode: 'C_ERR_NAME_REQ',
    customMessage: 'Name field is required.',
  },
  C_ERR_NAME_INVALID: {
    statusCode: 400,
    customCode: 'C_ERR_NAME_INVALID',
    customMessage: 'Name must be at least 12 characters.',
  },
  ERROR_USER_PROFILE: {
    statusCode: 400,
    customCode: 'C_ERR_UPDATE_PROFILE_UNAVAIBLE',
    customMessage: 'Update profile failed.',
  },
  C_ERR_PROFILE_INVALID: {
    statusCode: 400,
    customCode: 'C_ERR_PROFILE_INVALID',
    customMessage: 'Profile invalid.',
  },
  C_ERR_EMAIL_UNAVAILABLE: {
    statusCode: 400,
    customCode: 'C_ERR_EMAIL_UNAVAILABLE',
    customMessage: 'This email is already in use.',
  },
  C_ERR_NO_TOKEN: {
    statusCode: 401,
    customCode: 'C_ERR_NO_TOKEN',
    customMessage: 'Authentication token is missing.',
  },
  C_ERR_ACC_DND: {
    statusCode: 403,
    customCode: 'C_ERR_ACC_DND',
    customMessage: 'Access denied.',
  },
  C_ERR_NOT_FOUND: {
    statusCode: 404,
    customCode: 'C_ERR_NOT_FOUND',
    customMessage: 'Not found.',
  },
  C_ERR_NO_PRODS: {
    statusCode: 400,
    customCode: 'C_ERR_NO_PRODS',
    customMessage: 'There are no products in this sale.',
  },
  C_ERR_INVALID_PRODS: {
    statusCode: 400,
    customCode: 'C_ERR_INVALID_PRODS',
    customMessage: 'Invalid products id or quantity',
  },
  C_ERR_INVALID_DELV: {
    statusCode: 400,
    customCode: 'C_ERR_INVALID_DELV',
    customMessage: 'Invalid delivery address or number',
  },
  C_ERR_NO_USER_TOKEN: {
    statusCode: 500,
    customCode: 'C_ERR_NO_USER_TOKEN',
    customMessage: 'Unexpected token error',
  },
  C_ERR_PRICE: {
    statusCode: 400,
    customCode: 'C_ERR_PRICE',
    customMessage: 'Error. Price inconsistency',
  },
  C_ERR_INVALID_STATUS: {
    statusCode: 400,
    customCode: 'C_ERR_INVALID_STATUS',
    customMessage: 'Error. Status is either empty or invalid.',
  },
};
