const { ObjectID } = require('mongodb');

// accented chars regex -> https://regexr.com
const userNameRegex = /[\p{L}\s]{12,}/iu;
const emailRegex = /\S+@\S+\.\S+/;
const dateRegex = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;

const isBlank = (value) => (!value);
const isNotValidId = (value) => !ObjectID.isValid(value);
const isLessThan = (value, min) => (value < min);
const isGreaterThan = (value, min) => (value > min);
const isNameInvalid = (name) => !userNameRegex.test(name);
const isEmailValid = (email) => !emailRegex.test(email.toLowerCase());
const isDateValid = (date) => !dateRegex.test(date.datedAt);
const isNotEqual = (value1, value2) => value1 !== value2;
const isNotBool = (value) => (typeof value !== 'boolean');
const isNotString = (value) => (typeof value !== 'string');
const isNotNumber = (value) => (typeof value !== 'number');
const isNotArray = (value) => !Array.isArray(value);
const isNotArrayOfStrings = (array) => array.some((elem) => isNotString(elem));
const isNotYear = (value) => {
  const currentYear = new Date().getFullYear();
  if (Number.isNaN(value) || value > currentYear || value < 1900) return true;
  return false;
};
const isNotGrade = (value) => {
  if (Number.isNaN(value) || value < 1 || value > 9) return true;
  return false;
};
const notInclude = (array, value) => !array.includes(value);

module.exports = {
  notInclude,
  isBlank,
  isLessThan,
  isGreaterThan,
  isNameInvalid,
  isEmailValid,
  isDateValid,
  isNotEqual,
  isNotBool,
  isNotString,
  isNotArray,
  isNotArrayOfStrings,
  isNotNumber,
  isNotYear,
  isNotGrade,
  isNotValidId,
};
