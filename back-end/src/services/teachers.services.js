/* eslint-disable complexity */
const { teachers, classes, students } = require('../models');
const { authInstanceId, authNewStudent, authNewComment } = require('../schemas');
const { checkDuplicateStudent } = require('./helpers');

const error = {
  notTeacherOfClass: 'C_ERR_CLASS_NOT_TEACHER',
};

const noChangeMsg = 'Data is the same. Nothing changed.';

const getClasses = async (userId) => {
  authInstanceId(userId);
  return teachers.getClasses(userId);
};

const addStudent = async (payload, userId) => {
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
    return { success: false, message: noChangeMsg };
  }
  return { success: true, result };
};

const removeStudent = async (payload, userId) => {
  authInstanceId([userId, payload.classId]);
  const currClass = await classes.getById(payload.classId);
  if (!currClass.teachers.includes(userId)) {
    throw new Error(error.notTeacherOfClass);
  }
  const result = await students.remove(payload.classId, payload.name);

  if (result == null) throw new Error(error.classNotFound);
  if (result === 0) {
    return { success: false, message: noChangeMsg };
  }
  return { success: true, result: `Student ${result} removed from class.` };
};

const addStudentComment = async (payload, userId) => {
  authInstanceId([userId, payload.classId]);
  authNewComment(payload.msg);
  const currClass = await classes.getById(payload.classId);
  if (!currClass.teachers.includes(userId)) {
    throw new Error(error.notTeacherOfClass);
  }
  const result = await students.addComment(payload, userId);

  if (result == null) throw new Error(error.classNotFound);
  if (result === 0) {
    return { success: false, message: noChangeMsg };
  }
  return { success: true, result };
};

module.exports = {
  getClasses,
  addStudent,
  removeStudent,
  addStudentComment,
};
