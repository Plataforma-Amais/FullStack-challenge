module.exports = {
  C_ERR_BAD_REQUEST: {
    statusCode: 404,
    customCode: 'C_ERR_BAD_REQUEST',
    customMessage: 'Error: bad request.',
  },
  C_ERR_USER_NOT_FOUND: {
    statusCode: 404,
    customCode: 'C_ERR_USER_NOT_FOUND',
    customMessage: 'Login failed. User not found.',
  },
  C_ERR_TEACHERS_INVALID: {
    statusCode: 400,
    customCode: 'C_ERR_TEACHERS_INVALID',
    customMessage: 'Error: teachers data is invalid (at least one is not string).',
  },
  C_ERR_ID_MISSING: {
    statusCode: 400,
    customCode: 'C_ERR_SCHOOL_ID_MISSING',
    customMessage: 'Error: Id missing.',
  },
  C_ERR_ID_INVALID: {
    statusCode: 400,
    customCode: 'C_ERR_SCHOOL_ID_INVALID',
    customMessage: 'Error: Id is invalid.',
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
  C_ERR_NO_USER_TOKEN: {
    statusCode: 500,
    customCode: 'C_ERR_NO_USER_TOKEN',
    customMessage: 'Unexpected token error',
  },
  C_ERR_ACC_DND: {
    statusCode: 403,
    customCode: 'C_ERR_ACC_DND',
    customMessage: 'Access denied.',
  },
  C_ERR_NOT_FOUND: {
    statusCode: 404,
    customCode: 'C_ERR_NOT_FOUND',
    customMessage: 'Route not found.',
  },
  C_ERR_SCHOOL_NOT_FOUND: {
    statusCode: 404,
    customCode: 'C_ERR_SCHOOL_NOT_FOUND',
    customMessage: 'Error: school not found.',
  },
  C_ERR_SCHOOL_NOT_DIRECTOR: {
    statusCode: 403,
    customCode: 'C_ERR_SCHOOL_NOT_DIRECTOR',
    customMessage: 'Forbidden: user is not director of school.',
  },
  C_ERR_SCHOOL_MISSING: {
    statusCode: 400,
    customCode: 'C_ERR_SCHOOL_MISSING',
    customMessage: 'Error: missing data for new school.',
  },
  C_ERR_SCHOOL_TYPE_MISSING: {
    statusCode: 400,
    customCode: 'C_ERR_SCHOOL_TYPE_MISSING',
    customMessage: 'Error: type of new school is missing.',
  },
  C_ERR_SCHOOL_TYPE_INVALID: {
    statusCode: 400,
    customCode: 'C_ERR_SCHOOL_TYPE_INVALID',
    customMessage: 'Error: type of new school is invalid.',
  },
  C_ERR_SCHOOL_NAME_MISSING: {
    statusCode: 400,
    customCode: 'C_ERR_SCHOOL_NAME_MISSING',
    customMessage: 'Error: name of new school is missing.',
  },
  C_ERR_SCHOOL_NAME_INVALID: {
    statusCode: 400,
    customCode: 'C_ERR_SCHOOL_NAME_INVALID',
    customMessage: 'Error: name of new school is invalid (must be string).',
  },
  C_ERR_SCHOOL_ADDRESS_MISSING: {
    statusCode: 400,
    customCode: 'C_ERR_SCHOOL_ADDRESS_MISSING',
    customMessage: 'Error: address of new school is missing.',
  },
  C_ERR_SCHOOL_ADDRESS_INVALID: {
    statusCode: 400,
    customCode: 'C_ERR_SCHOOL_ADDRESS_INVALID',
    customMessage: 'Error: address of new school is invalid (must be string).',
  },
  C_ERR_CLASS_NOT_FOUND: {
    statusCode: 404,
    customCode: 'C_ERR_CLASS_NOT_FOUND',
    customMessage: 'Error: class not found.',
  },
  C_ERR_CLASS_MISSING: {
    statusCode: 400,
    customCode: 'C_ERR_CLASS_MISSING',
    customMessage: 'Error: class data is missing.',
  },
  C_ERR_CLASS_SCHOOL_MISSING: {
    statusCode: 400,
    customCode: 'C_ERR_CLASS_SCHOOL_MISSING',
    customMessage: 'Error: schoolId of class is missing.',
  },
  C_ERR_CLASS_NOT_TEACHER: {
    statusCode: 403,
    customCode: 'C_ERR_CLASS_NOT_TEACHER',
    customMessage: 'Forbidden: user is not a teacher of this class.',
  },
  C_ERR_CLASS_SCHOOL_INVALID: {
    statusCode: 400,
    customCode: 'C_ERR_CLASS_SCHOOL__INVALID',
    customMessage: 'Error: schoolId in Class is invalid.',
  },
  C_ERR_CLASS_NAME_MISSING: {
    statusCode: 400,
    customCode: 'C_ERR_CLASS_NAME_MISSING',
    customMessage: 'Error: name of class is missing.',
  },
  C_ERR_CLASS_NAME_INVALID: {
    statusCode: 400,
    customCode: 'C_ERR_CLASS_NAME_INVALID',
    customMessage: 'Error: name of Class is invalid.',
  },
  C_ERR_CLASS_YEAR_MISSING: {
    statusCode: 400,
    customCode: 'C_ERR_CLASS_YEAR_MISSING',
    customMessage: 'Error: year of class is missing.',
  },
  C_ERR_CLASS_YEAR_INVALID: {
    statusCode: 400,
    customCode: 'C_ERR_CLASS_YEAR_INVALID',
    customMessage: 'Error: year of Class is invalid.',
  },
  C_ERR_CLASS_GRADE_MISSING: {
    statusCode: 400,
    customCode: 'C_ERR_CLASS_GRADE_MISSING',
    customMessage: 'Error: grade of class is missing.',
  },
  C_ERR_CLASS_GRADE_INVALID: {
    statusCode: 400,
    customCode: 'C_ERR_CLASS_GRADE_INVALID',
    customMessage: 'Error: grade of Class is invalid.',
  },
  C_ERR_STUDENT_MISSING: {
    statusCode: 400,
    customCode: 'C_ERR_STUDENT_MISSING',
    customMessage: 'Error: student name is missing.',
  },
  C_ERR_STUDENT_INVALID: {
    statusCode: 400,
    customCode: 'C_ERR_STUDENT_INVALID',
    customMessage: 'Error: student name is invalid.',
  },
};
