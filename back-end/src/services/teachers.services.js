/* eslint-disable max-lines-per-function */
/* eslint-disable complexity */
const { teachers, classes, students, users } = require('../models');
const { authInstanceId, authNewStudent, authNewComment } = require('../schemas');
const { checkDuplicateStudent } = require('./helpers');

const error = {
  notTeacherOfClass: 'C_ERR_CLASS_NOT_TEACHER',
  classNotFound: 'C_ERR_CLASS_NOT_FOUND',
  classEmpty: 'C_ERR_CLASS_IS_EMPTY',
};

const noChangeMsg = 'Data is the same. Nothing changed.';

const getClasses = async (userId) => {
  authInstanceId(userId);
  return teachers.getClasses(userId);
};

const getStudentComments = async (payload, userId) => {
  authInstanceId([userId, payload.classId]);
  const currClass = await classes.getById(payload.classId);
  if (!currClass.teachers.includes(userId)) {
    throw new Error(error.notTeacherOfClass);
  }
  if (!currClass.students) throw new Error(error.classEmpty);
  const filterComments = currClass.students.filter(
    (student) => student.name === payload.name,
  );
  const commentsArray = filterComments[0].comments;
  const resultComments = await commentsArray.reduce(
    async (array, curr) => {
      const teacher = await users.getById(curr.teacher);
      const comment = { msg: curr.msg, teacher };
      return [...await array, comment];
    }, [],
  );

  return resultComments;
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

const addClassComment = async (payload, userId) => {
  authInstanceId([userId, payload.classId]);
  authNewComment(payload.msg);
  const currClass = await classes.getById(payload.classId);
  if (!currClass.teachers.includes(userId)) {
    throw new Error(error.notTeacherOfClass);
  }
  const result = await classes.addComment(payload, userId);
  if (result == null) throw new Error(error.classNotFound);
  if (result === 0) {
    return { success: false, message: noChangeMsg };
  }
  return { success: true, result };
};

module.exports = {
  getClasses,
  getStudentComments,
  addStudent,
  removeStudent,
  addStudentComment,
  addClassComment,
};
