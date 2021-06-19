const { admin } = require('../models');

const getUsers = async () => admin.getAllUsers();

const getUsersByProfile = async (profile) => admin.getUsersByProfile(profile);

const removeUser = async (userId) => admin.removeUser(userId);

module.exports = {
  getUsers,
  getUsersByProfile,
  removeUser,
};
