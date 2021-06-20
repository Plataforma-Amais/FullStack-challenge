const { classes } = require('../models');
const { authSchoolId } = require('../schemas');

const getBySchoolId = async (schoolId) => {
  authSchoolId(schoolId);
  const schoolClasses = await classes.getBySchoolId(schoolId);
  return schoolClasses;
};

const createClass = async (schoolId) => {
  const schoolClasses = await classes.getBySchoolId(schoolId);

  return schoolClasses;
};

module.exports = {
  getBySchoolId,
  createClass,
};
