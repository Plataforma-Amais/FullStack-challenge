const { isBlank, isNotString } = require('./helpers');

const error = {
  missingSchoolId: 'C_ERR_SCHOOL_ID_MISSING',
  invalidSchoolId: 'C_ERR_SCHOOL_ID_INVALID',
};

const authRemoveSchool = (schoolId) => {
  switch (true) {
    case isBlank(schoolId): throw new Error(error.missingSchoolId);
    case isNotString(schoolId): throw new Error(error.invalidSchoolIds);
    default: return null;
  }
};

module.exports = authRemoveSchool;
