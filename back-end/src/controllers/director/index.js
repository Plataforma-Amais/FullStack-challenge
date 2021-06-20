const getSchool = require('./getSchool.controllers');
const getClasses = require('./getClasses.controllers');
const createClass = require('./createClass.controllers');
const removeClass = require('./removeClass.controllers');
const getStudents = require('./getStudents.controllers');
const createStudent = require('./createStudent.controllers');
const removeStudent = require('./removeStudent.controllers');

module.exports = {
  getSchool,
  getClasses,
  createClass,
  removeClass,
  getStudents,
  createStudent,
  removeStudent,
};
