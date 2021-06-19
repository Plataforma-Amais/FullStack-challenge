const { users } = require('../models');
const { generateToken } = require('../security');
const { authLogin } = require('../schemas');

const login = async ({ email, password }) => {
  const user = (email)
    ? await users.findOne({ where: { email } })
    : null;
  authLogin(email, password, user);
  const { dataValues } = user;
  const token = generateToken(dataValues.id, dataValues.role);
  return { name: dataValues.name, email: dataValues.email, role: dataValues.role, token };
};

module.exports = {
  login,
};
