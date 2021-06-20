/* eslint-disable complexity */
const { isNotArray, isNotArrayOfStrings } = require('./helpers');

const error = {
  invalidTeachers: 'C_ERR_TEACHERS_INVALID',
};

const authClassTeachers = (teachers) => {
  switch (true) {
    case isNotArray(teachers): throw new Error(error.invalidTeachers);
    case isNotArrayOfStrings(teachers): throw new Error(error.invalidTeachers);
    default: return null;
  }
};

module.exports = authClassTeachers;
