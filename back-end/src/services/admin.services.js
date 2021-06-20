const { admin } = require('../models');
const { authNewSchool, authInstanceId } = require('../schemas');

const getUsers = async () => admin.getAllUsers();

const getUsersByProfile = async (profile) => admin.getUsersByProfile(profile);

const removeUser = async (userId) => admin.removeUser(userId);

const getAllSchools = async () => admin.getAllSchools();

const getDirector = async (school) => (
  (school.director && typeof school.director === 'string')
    ? admin.getDirector(school.director)
    : null
  );

const createSchool = async (newSchool) => {
  authNewSchool(newSchool);
  const director = await getDirector(newSchool);
  return admin.createSchool({ ...newSchool, director });
};

const updateSchool = async (school, schoolId) => {
  authNewSchool(school);
  const director = await getDirector(school);
  const updateData = { ...school, director };
  return admin.updateSchool(updateData, schoolId);
};

const removeSchool = async (schoolId) => {
  authInstanceId(schoolId);
  return admin.removeSchool(schoolId);
};

module.exports = {
  getUsers,
  getUsersByProfile,
  removeUser,
  getAllSchools,
  createSchool,
  updateSchool,
  removeSchool,
};
