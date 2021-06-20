const session = require('./session.services');
const users = require('./users.services');
const admin = require('./admin.services');
const schools = require('./schools.services');
const classes = require('./classes.services');
const teachers = require('./teachers.services');
const students = require('./students.services');

module.exports = {
  session,
  users,
  admin,
  schools,
  classes,
  teachers,
  students,
};
