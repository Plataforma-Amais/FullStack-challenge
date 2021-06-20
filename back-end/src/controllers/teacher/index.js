const createStudent = require('./createStudent.controllers');
const getStudentComments = require('./getStudentComments.controllers');
const updateStudent = require('./updateStudent.controllers');
const removeStudent = require('./removeStudent.controllers');
const getClasses = require('./getClasses.controllers');
const updateClass = require('./updateClass.controllers');

module.exports = {
  createStudent,
  getStudentComments,
  updateStudent,
  removeStudent,
  getClasses,
  updateClass,
};
