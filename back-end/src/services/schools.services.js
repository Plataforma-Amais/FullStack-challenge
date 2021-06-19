const { schools } = require('../models');
const { authSchoolId } = require('../schemas');

const getById = async (schoolId) => {
  authSchoolId(schoolId);
  return schools.getById(schoolId);
};

module.exports = {
  getById,
};
