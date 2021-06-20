const ObjectId = require('mongodb').ObjectID;
const { schools, classes } = require('../models');
const { authSchoolId } = require('../schemas');

const error = {
  schoolNotFound: 'C_ERR_SCHOOL_NOT_FOUND',
  notDirector: 'C_ERR_SCHOOL_NOT_DIRECTOR',
};

const getAll = async (schoolId, userId) => {
  authSchoolId(schoolId);
  const school = await schools.getById(schoolId);
  if (!school) throw new Error(error.schoolNotFound);
  const user = ObjectId(userId);
  const schoolDirectorId = ObjectId(school.director);
  if (!schoolDirectorId.equals(user)) throw new Error(error.notDirector);
  return classes.getAll(schoolId);
};

module.exports = {
  getAll,
};
