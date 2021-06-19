const { users } = require('../models');
const { generateToken } = require('../security');
const { authLogin } = require('../schemas');

const login = async ({ email, password }) => {
  const user = (email)
    ? await users.findUserByEmail(email)
    : null;
  authLogin(email, password, user);
  const token = generateToken(user.id);
  return { name: user.name, email: user.email, profile: user.profile, token };
};

module.exports = {
  login,
};
