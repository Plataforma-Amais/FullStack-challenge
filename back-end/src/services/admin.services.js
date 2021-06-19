const { admin } = require('../models');

const getUsers = async () => admin.getAllUsers();

const getUsersByProfile = async (profile) => admin.getUsersByProfile(profile);

const removeUser = async (userId) => admin.removeUser(userId);

const getAllSchools = async () => admin.getAllSchools();

module.exports = {
  getUsers,
  getUsersByProfile,
  removeUser,
  getAllSchools,
};
