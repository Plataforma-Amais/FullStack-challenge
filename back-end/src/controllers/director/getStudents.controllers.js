const { StatusCodes } = require('http-status-codes');
const { classes } = require('../../services');
const { schoolsError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body: { classId }, userId } = req;
    const result = await classes.getByClassId(classId, userId);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return next({ ...schoolsError, err });
  }
};
