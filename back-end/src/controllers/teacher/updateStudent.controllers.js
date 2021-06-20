const { StatusCodes } = require('http-status-codes');
const { teachers } = require('../../services');
const { teachersError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body: { name, msg, classId }, userId } = req;
    const result = await teachers.addStudentComment(
      { name, msg, classId },
      userId,
    );
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return next({ ...teachersError, err });
  }
};
