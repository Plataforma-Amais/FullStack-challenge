/* eslint-disable complexity */
const { isBlank, isNotString, notInclude } = require('./helpers');
const { schoolTypes } = require('./resources');

const error = {
  missingSchool: 'C_ERR_SCHOOL_MISSING',
  missingType: 'C_ERR_SCHOOL_TYPE_MISSING',
  missingName: 'C_ERR_SCHOOL_NAME_MISSING',
  missingAddress: 'C_ERR_SCHOOL_ADDRESS_MISSING',
  invalidName: 'C_ERR_SCHOOL_NAME_INVALID',
  invalidType: 'C_ERR_SCHOOL_TYPE_INVALID',
  invalidAddress: 'C_ERR_SCHOOL_ADDRESS_INVALID',
};

const authNewSchool = (newSchool) => {
  switch (true) {
    case isBlank(newSchool): throw new Error(error.missingSchool);
    case isBlank(newSchool.type): throw new Error(error.missingType);
    case isBlank(newSchool.name): throw new Error(error.missingName);
    case isBlank(newSchool.address): throw new Error(error.missingAddress);
    case isNotString(newSchool.type): throw new Error(error.invalidType);
    case isNotString(newSchool.name): throw new Error(error.invalidName);
    case isNotString(newSchool.address): throw new Error(error.invalidAddress);
    case notInclude(Object.Keys(schoolTypes), newSchool.type): throw new Error(error.invalidType);
    default: return null;
  }
};

module.exports = authNewSchool;
