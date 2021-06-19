const { StatusCodes } = require('http-status-codes');
const { schools } = require('../../services');
const { schoolsError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body: { schoolId } } = req;
    const directors = await schools.getById(schoolId);
    return res.status(StatusCodes.OK).json(directors);
  } catch (err) {
    return next({ ...schoolsError, err });
  }
};
