const { StatusCodes } = require('http-status-codes');
const { users } = require('../../services');
const { registerError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await users.create(body);
    res.status(StatusCodes.CREATED).json(user);
  } catch (err) {
    return next({ ...registerError, err });
  }
};
