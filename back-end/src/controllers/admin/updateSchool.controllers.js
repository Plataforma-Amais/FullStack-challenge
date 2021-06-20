const { StatusCodes } = require('http-status-codes');
const { admin } = require('../../services');
const { adminError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body: { payload, schoolId } } = req;
    const result = await admin.updateSchool(payload, schoolId);
    return res.status(StatusCodes.OK).json({
      message: 'Success',
      updatedTo: result,
    });
  } catch (err) {
    return next({ ...adminError, err });
  }
};
