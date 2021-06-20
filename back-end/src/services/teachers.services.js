const { teachers } = require('../models');
const { authInstanceId } = require('../schemas');

const getClasses = async (userId) => {
  console.log(userId);
  authInstanceId(userId);
  return teachers.getClasses(userId);
};

module.exports = {
  getClasses,
};
