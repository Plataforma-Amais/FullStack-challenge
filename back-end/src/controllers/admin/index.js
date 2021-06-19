const getUsers = require('./getUsers.controllers');
const getUsersByProfile = require('./getUsersByProfile.controllers');
const removeUser = require('./removeUser.controllers');
const getSchools = require('./getSchools.controllers');
const createSchool = require('./createSchool.controllers');
const removeSchool = require('./removeSchool.controllers');
const updateSchool = require('./updateSchool.controllers');

module.exports = {
  getUsers,
  getUsersByProfile,
  removeUser,
  getSchools,
  createSchool,
  removeSchool,
  updateSchool,
};
