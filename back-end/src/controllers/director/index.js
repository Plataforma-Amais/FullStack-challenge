const getSchool = require('./getSchool.controllers');
const getClasses = require('./getClasses.controllers');
const createClass = require('./createClass.controllers');
const removeClass = require('./removeClass.controllers');
const getClass = require('./getClass.controllers');
const searchTeacher = require('./searchTeacher.controllers');

module.exports = {
  getSchool,
  getClasses,
  getClass,
  createClass,
  removeClass,
  searchTeacher,
};
