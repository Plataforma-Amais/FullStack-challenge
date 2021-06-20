/* eslint-disable complexity */
const { isBlank, isNotString, isNotYear, isNotGrade } = require('./helpers');

const error = {
  missingClass: 'C_ERR_CLASS_MISSING',
  missingSchoolId: 'C_ERR_CLASS_SCHOOL_MISSING',
  missingClassName: 'C_ERR_CLASS_NAME_MISSING',
  missingYear: 'C_ERR_CLASS_YEAR_MISSING',
  missingGrade: 'C_ERR_CLASS_GRADE_MISSING',
  invalidSchoolId: 'C_ERR_CLASS_SCHOOL_INVALID',
  invalidName: 'C_ERR_CLASS_NAME_INVALID',
  invalidYear: 'C_ERR_CLASS_YEAR_INVALID',
  invalidGrade: 'C_ERR_CLASS_GRADE_INVALID',
};

const authNewClass = (newClass) => {
  switch (true) {
    case isBlank(newClass): throw new Error(error.missingClass);
    case isBlank(newClass.schoolId): throw new Error(error.missingSchoolId);
    case isBlank(newClass.class): throw new Error(error.missingClassName);
    case isBlank(newClass.year): throw new Error(error.missingYear);
    case isBlank(newClass.grade): throw new Error(error.missingGrade);
    case isNotString(newClass.schoolId): throw new Error(error.invalidSchoolId);
    case isNotString(newClass.class): throw new Error(error.invalidName);
    case isNotString(newClass.year): throw new Error(error.invalidYear);
    case isNotYear(newClass.year): throw new Error(error.invalidYear);
    case isNotString(newClass.grade): throw new Error(error.invalidGrade);
    case isNotGrade(newClass.grade): throw new Error(error.invalidGrade);
    default: return null;
  }
};

module.exports = authNewClass;
