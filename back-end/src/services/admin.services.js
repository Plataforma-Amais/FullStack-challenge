const { admin } = require('../models');
const { authNewSchool } = require('../schemas');

const getUsers = async () => admin.getAllUsers();

const getUsersByProfile = async (profile) => admin.getUsersByProfile(profile);

const removeUser = async (userId) => admin.removeUser(userId);

const getAllSchools = async () => admin.getAllSchools();

const createSchool = async (newSchool) => {
  authNewSchool(newSchool);
  const checkDirector = (
    newSchool.director && typeof newSchool.director === 'string'
    ) ? newSchool.director : null;
  await admin.createSchool({ ...newSchool, director: checkDirector });
};

module.exports = {
  getUsers,
  getUsersByProfile,
  removeUser,
  getAllSchools,
  createSchool,
};
