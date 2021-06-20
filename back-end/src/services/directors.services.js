/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-underscore-dangle */
const { schools, classes, users } = require('../models');
const { authInstanceId, authNewClass, authClassTeachers } = require('../schemas');
const { checkDirectorOwnsClass, checkDirectorOfSchool } = require('./helpers');

const error = {
  schoolNotFound: 'C_ERR_SCHOOL_NOT_FOUND',
  classNotFound: 'C_ERR_CLASS_NOT_FOUND',
  differentDirector: 'C_ERR_SCHOOL_NOT_DIRECTOR',
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
  if (!result) throw new Error(error.classNotFound);
  return result;
};

const createClass = async (newClass, userId) => {
  await checkDirectorOfSchool(userId, newClass.schoolId);
  const year = parseInt(newClass.year, 10);
  const grade = parseInt(newClass.grade, 10);
  const classData = { ...newClass, year, grade };
  authNewClass(classData);
  return classes.create(classData);
};

const updateClassTeachers = async (payload, userId) => {
  const { classId, teachers } = payload;
  authInstanceId([classId, userId]);
  await checkDirectorOwnsClass(userId, classId);
  authClassTeachers(teachers);
  const result = await classes.update(classId, 'teachers', teachers);
  if (result == null) throw new Error(error.classNotFound);
  if (result === 0) {
    return { success: false, message: 'Data is the same. Nothing changed.' };
  }
  return { success: true, result };
};

const removeClass = async (classId, userId) => {
  authInstanceId([classId, userId]);
  await checkDirectorOwnsClass(userId, classId);

  const result = await classes.remove(classId);

  return result;
};

module.exports = {
  searchTeacher,
  getSchoolByDirectorId,
  getClasses,
  getClassById,
  createClass,
  updateClassTeachers,
  removeClass,
};
