const session = require('./session.services');
const users = require('./users.services');
const admin = require('./admin.services');
const schools = require('./schools.services');
const classes = require('./classes.services');

module.exports = {
  session,
  users,
  admin,
  schools,
  classes,
};
