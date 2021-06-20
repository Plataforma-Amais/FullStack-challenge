const { StatusCodes } = require('http-status-codes');
const { classes } = require('../../services');
const { schoolsError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body: { schoolId }, userId } = req;
    const result = await classes.getAll(schoolId, userId);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return next({ ...schoolsError, err });
  }
};
