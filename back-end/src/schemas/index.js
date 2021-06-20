const authLogin = require('./authLogin.schemas');
const authRegisterUser = require('./authRegisterUser.schemas');
const authNewSchool = require('./authNewSchool.schemas');
const authInstanceId = require('./authInstanceId.schemas');
const authNewClass = require('./authNewClass.schemas');
const authClassTeachers = require('./authClassTeachers.schemas');
const authNewStudent = require('./authNewStudent.schemas');
const utils = require('./utils');

module.exports = {
  authLogin,
  authRegisterUser,
  authNewSchool,
  authInstanceId,
  authNewClass,
  authClassTeachers,
  authNewStudent,
  utils,
};
