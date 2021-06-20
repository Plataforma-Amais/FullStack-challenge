const { StatusCodes } = require('http-status-codes');
const { users } = require('../../services');
const { schoolsError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body: { payload }, userId } = req;
    const result = await users.getByProfile(payload, userId);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return next({ ...schoolsError, err });
  }
};
