const { teachers } = require('../models');

const getAll = async () => teachers.getAll();

module.exports = {
  getAll,
};
