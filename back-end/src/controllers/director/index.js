const getSchool = require('./getSchool.controllers');
const getClasses = require('./getClasses.controllers');
const getClass = require('./getClass.controllers');
const createClass = require('./createClass.controllers');
const updateClass = require('./updateClass.controllers');
const removeClass = require('./removeClass.controllers');
const searchTeacher = require('./searchTeacher.controllers');

module.exports = {
  getSchool,
  getClasses,
  getClass,
  createClass,
  updateClass,
  removeClass,
  searchTeacher,
};
