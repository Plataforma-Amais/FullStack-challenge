const { users } = require('../models');
const { generateToken } = require('../security');
const { authRegisterUser } = require('../schemas');

const create = async (payload) => {
  const data = {
    name: payload.name,
    email: payload.email,
    password: payload.password,
    profile: payload.profile };

  const isEmailAvailable = (data.email)
    ? await users.findUserByEmail(data.email)
    : null;
  authRegisterUser(data, isEmailAvailable);

  const newUserId = await users.create(data);

  const token = generateToken(newUserId, data.profile);
  const { profile, name, email } = data;
  return { name, email, token, profile };
};

const getByProfile = async (profile) => users.getByProfile(profile);

module.exports = {
  create,
  getByProfile,
};
