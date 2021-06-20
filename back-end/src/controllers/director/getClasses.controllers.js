const { StatusCodes } = require('http-status-codes');
const { directors } = require('../../services');
const { schoolsError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body: { schoolId } } = req;
    const result = await directors.getClasses(schoolId);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return next({ ...schoolsError, err });
  }
};
