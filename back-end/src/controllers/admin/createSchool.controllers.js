const { StatusCodes } = require('http-status-codes');
const { admin } = require('../../services');
const { schoolsError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body: payload } = req;
    const result = await admin.createSchool(payload);
    return res.status(StatusCodes.OK).json({
      message: 'Success',
      schoolCreated: result,
    });
  } catch (err) {
    return next({ ...schoolsError, err });
  }
};
