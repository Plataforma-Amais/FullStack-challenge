const createSchool = require('./createSchool.controllers');
const getUsers = require('./getUsers.controllers');
const getUsersByProfile = require('./getUsersByProfile.controllers');
const removeUser = require('./removeUser.controllers');
const removeSchool = require('./removeSchool.controllers');
const updateSchool = require('./updateSchool.controllers');

module.exports = {
  getUsers,
  getUsersByProfile,
  removeUser,
  createSchool,
  removeSchool,
  updateSchool,
};
