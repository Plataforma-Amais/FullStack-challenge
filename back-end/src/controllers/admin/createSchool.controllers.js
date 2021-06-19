const { StatusCodes } = require('http-status-codes');
const { schools } = require('../../services');
const { schoolsError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body: payload } = req;
    await schools.createSchool(payload);
    return res.status(StatusCodes.OK).json({
      message: 'Success',
      schoolCreated: payload,
    });
  } catch (err) {
    return next({ ...schoolsError, err });
  }
};
