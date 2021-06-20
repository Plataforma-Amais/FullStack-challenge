/* eslint-disable max-lines-per-function */
/* eslint-disable no-underscore-dangle */
const ObjectId = require('mongodb').ObjectID;
const { classes, schools } = require('../models');
const { authInstanceId, authNewClass } = require('../schemas');

const error = {
  differentDirector: 'C_ERR_SCHOOL_NOT_DIRECTOR',
  schoolNotFound: 'C_ERR_SCHOOL_NOT_FOUND',
};

const getBySchoolId = async (schoolId) => {
  authInstanceId(schoolId);
  const schoolClasses = await classes.getBySchoolId(schoolId);
  return schoolClasses;
};

const create = async (newClass, userId) => {
  authNewClass(newClass);
  const school = await schools.getByDirectorId(userId);
  if (!school) throw new Error(error.schoolNotFound);
  if (school) {
    const schoolId = ObjectId(school.id);
    const newClassSchoolId = ObjectId(newClass.schoolId);
    if (!schoolId.equals(newClassSchoolId)) throw new Error(error.differentDirector);
  }
  const result = await classes.create(newClass);
  if (result) {
    const classCreated = {
      schoolId: result.ops[0].schoolId,
      year: result.ops[0].year,
      grade: result.ops[0].grade,
      class: result.ops[0].class,
      teachers: result.ops[0].teachers,
    };
    return classCreated;
  }
  return null;
};

const remove = async (classId, userId) => {
  authInstanceId(classId);
  const school = await schools.getByDirectorId(userId);
  if (!school) throw new Error(error.schoolNotFound);
  if (school) {
    const schoolId = ObjectId(school.director);
    const user = ObjectId(userId);
    if (!schoolId.equals(user)) throw new Error(error.differentDirector);
  }
  const result = await classes.remove(classId);

  return result;
};

module.exports = {
  getBySchoolId,
  create,
  remove,
};
