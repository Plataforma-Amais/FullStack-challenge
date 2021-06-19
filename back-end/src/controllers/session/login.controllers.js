const { StatusCodes } = require('http-status-codes');
const { session } = require('../../services');
const { loginError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body } = req;
    const user = await session.login(body);
    return res.status(StatusCodes.OK).json(user);
  } catch (err) {
    return next({ ...loginError, err });
  }
};
