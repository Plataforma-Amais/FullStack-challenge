const { StatusCodes } = require('http-status-codes');
const { directors } = require('../../services');
const { schoolsError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body: { classId } } = req;
    const result = await directors.getClassById(classId);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return next({ ...schoolsError, err });
  }
};
