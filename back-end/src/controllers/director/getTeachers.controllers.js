const { StatusCodes } = require('http-status-codes');
const { users } = require('../../services');
const { schoolsError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { userId } = req;
    const result = await users.getByProfile('teacher', userId);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return next({ ...schoolsError, err });
  }
};
