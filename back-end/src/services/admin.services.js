const { admin } = require('../models');

const getUsers = async () => admin.getAllUsers();

const getUsersByProfile = async (profile) => admin.getUsersByProfile(profile);

module.exports = {
  getUsers,
  getUsersByProfile,
};
