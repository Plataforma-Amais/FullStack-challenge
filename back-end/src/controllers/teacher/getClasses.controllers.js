const { StatusCodes } = require('http-status-codes');
const { teachers } = require('../../services');
const { schoolsError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { userId } = req;
    const result = await teachers.getClasses(userId);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    console.log(err);
    return next({ ...schoolsError, err });
  }
};
