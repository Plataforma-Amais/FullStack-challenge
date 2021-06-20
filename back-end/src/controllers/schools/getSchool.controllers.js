const { StatusCodes } = require('http-status-codes');
const { schools } = require('../../services');
const { schoolsError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { userId } = req;
    const school = await schools.getByDirectorId(userId);
    return res.status(StatusCodes.OK).json(school);
  } catch (err) {
    return next({ ...schoolsError, err });
  }
};
