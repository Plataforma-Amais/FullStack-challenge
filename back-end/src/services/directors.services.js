/* eslint-disable max-lines-per-function */
/* eslint-disable no-underscore-dangle */
const ObjectId = require('mongodb').ObjectID;
const { authInstanceId, authNewClass } = require('../schemas');
const { schools, classes, users } = require('../models');

const error = {
  schoolNotFound: 'C_ERR_SCHOOL_NOT_FOUND',
};

const searchTeacher = (field, value) => {
  if (!field || !value) return 'Search term empty. Nothing searched.';
  return users.searchByProfile(field, value, 'teacher');
};

const getSchoolByDirectorId = async (userId) => {
  authInstanceId(userId);
  const school = await schools.getByDirectorId(userId);
  if (!school) throw new Error(error.schoolNotFound);
  return school;
};

const getClasses = async (schoolId) => {
  authInstanceId(schoolId);
  const schoolClasses = await classes.getBySchoolId(schoolId);
  return schoolClasses;
};

const getClassById = async (classId) => {
  authInstanceId(classId);
  const result = await classes.getById(classId);
  console.log(result);
  return result;
};

const createClass = async (newClass, userId) => {
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

module.exports = {
  searchTeacher,
  getSchoolByDirectorId,
  getClasses,
  getClassById,
  createClass,
};
