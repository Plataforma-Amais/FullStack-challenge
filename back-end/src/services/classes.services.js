/* eslint-disable max-lines-per-function */
/* eslint-disable no-underscore-dangle */
const ObjectId = require('mongodb').ObjectID;
const { classes, schools } = require('../models');
const { authInstanceId, authNewClass } = require('../schemas');

const error = {
  differentDirector: 'C_ERR_SCHOOL_NOT_DIRECTOR',
  schoolNotFound: 'C_ERR_SCHOOL_NOT_FOUND',
};

const create = async (newClass, userId) => {
  const year = parseInt(newClass.year, 10);
  const grade = parseInt(newClass.grade, 10);
  const classData = { ...newClass, year, grade };
  authNewClass(classData);
  const school = await schools.getByDirectorId(userId);
  if (!school) throw new Error(error.schoolNotFound);
  if (school) {
    const schoolId = ObjectId(school.id);
    const classSchoolId = ObjectId(classData.schoolId);
    if (!schoolId.equals(classSchoolId)) throw new Error(error.differentDirector);
  }
  const result = await classes.create(classData);
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
  create,
  remove,
};
