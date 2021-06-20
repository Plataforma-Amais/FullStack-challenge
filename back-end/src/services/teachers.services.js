/* eslint-disable complexity */
const { teachers, classes, students } = require('../models');
const { authInstanceId, authNewStudent } = require('../schemas');
const { checkDuplicateStudent } = require('./helpers');

const error = {
  notTeacherOfClass: 'C_ERR_CLASS_NOT_TEACHER',
};

const getClasses = async (userId) => {
  authInstanceId(userId);
  return teachers.getClasses(userId);
};

const addStudentInClass = async (payload, userId) => {
  authInstanceId([userId, payload.classId]);
  authNewStudent(payload);
  const currClass = await classes.getById(payload.classId);
  if (currClass.students && currClass.students.length > 0) {
    checkDuplicateStudent(currClass.students, payload.name);
  }
  if (!currClass.teachers.includes(userId)) {
    throw new Error(error.notTeacherOfClass);
  }
  const result = await students.create(payload);
  if (result == null) throw new Error(error.classNotFound);
  if (result === 0) {
    return { success: false, message: 'Data is the same. Nothing changed.' };
  }
  return { success: true, result };
};

module.exports = {
  getClasses,
  addStudentInClass,
};
