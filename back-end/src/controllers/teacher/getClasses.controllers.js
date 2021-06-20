const { StatusCodes } = require('http-status-codes');
const { teachers } = require('../../services');
const { teachersError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { userId } = req;
    const result = await teachers.getClasses(userId);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return next({ ...teachersError, err });
  }
};
