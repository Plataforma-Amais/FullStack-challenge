const { StatusCodes } = require('http-status-codes');
const { classes } = require('../../services');
const { schoolsError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body: { classId }, userId } = req;
    const result = await classes.remove(classId, userId);
    const message = (result)
      ? 'Done. Class removed.' : 'Class not found. Nothing removed.';
    return res.status(StatusCodes.OK).json({ message, success: result });
  } catch (err) {
    return next({ ...schoolsError, err });
  }
};
