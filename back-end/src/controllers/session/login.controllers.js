const { StatusCodes } = require('http-status-codes');
const { session } = require('../../services');
const { loginError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body } = req;
    const token = await session.login(body);
    return res.status(StatusCodes.OK).json(token);
  } catch (err) {
    return next({ ...loginError, err });
  }
};
