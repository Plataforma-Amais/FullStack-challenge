const authLogin = require('./authLogin.schemas');
const authRegisterUser = require('./authRegisterUser.schemas');
const authNewSchool = require('./authNewSchool.schemas');
const authUpdateSchool = require('./authUpdateSchool.schemas');
const utils = require('./utils');

module.exports = {
  authLogin,
  authRegisterUser,
  authNewSchool,
  authUpdateSchool,
  utils,
};
