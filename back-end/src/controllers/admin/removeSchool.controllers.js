const { StatusCodes } = require('http-status-codes');
const { admin } = require('../../services');
const { adminError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body: { schoolId } } = req;
    const result = await admin.removeSchool(schoolId);
    return res.status(StatusCodes.OK).json({
      message: (result)
        ? 'Success. School removed.'
        : 'School not found, nothing removed.',
    });
  } catch (err) {
    return next({ ...adminError, err });
  }
};
