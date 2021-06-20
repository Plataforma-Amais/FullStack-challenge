const { StatusCodes } = require('http-status-codes');
const { directors } = require('../../services');
const { schoolsError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { userId } = req;
    const school = await directors.getSchoolByDirectorId(userId);
    return res.status(StatusCodes.OK).json(school);
  } catch (err) {
    return next({ ...schoolsError, err });
  }
};
