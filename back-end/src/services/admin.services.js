const { admin, users, schools } = require('../models');
const { authNewSchool, authInstanceId } = require('../schemas');

const getUsers = async () => users.getAll();

const getUsersByProfile = async (profile) => users.getByProfile(profile);

const removeUser = async (userId) => {
  authInstanceId(userId);
  return users.removeOne(userId);
};

const getAllSchools = async () => schools.getAll();

const getDirectorId = async (school) => {
  if (school.director) {
    authInstanceId(school.director);
    return users.getUserId(school.director);
  }
  return null;
};

const createSchool = async (newSchool) => {
  authNewSchool(newSchool);
  const directorId = await getDirectorId(newSchool);
  return schools.create({ ...newSchool, director: directorId });
};

const updateSchool = async (school, schoolId) => {
  authNewSchool(school);
  authInstanceId(schoolId);
  const directorId = await getDirectorId(school);
  const updateData = { ...school, director: directorId };
  return schools.update(updateData, schoolId);
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
