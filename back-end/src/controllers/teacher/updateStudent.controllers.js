const { StatusCodes } = require('http-status-codes');
const { classes } = require('../../services');
const { teachersError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body: { payload }, userId } = req;
    const result = await classes.create(payload, userId);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return next({ ...teachersError, err });
  }
};
