const { schools } = require('../models');

const error = {
  schoolNotFound: 'C_ERR_SCHOOL_NOT_FOUND',
};

const getByDirectorId = async (userId) => {
  const school = await schools.getByDirectorId(userId);
  if (!school) throw new Error(error.schoolNotFound);
  return school;
};

module.exports = {
  getByDirectorId,
};
