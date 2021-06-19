const { StatusCodes } = require('http-status-codes');
const { admin } = require('../../services');
const { adminError } = require('./error');

module.exports = async (_req, res, next) => {
  try {
    const schools = await admin.getSchools();
    return res.status(StatusCodes.OK).json(schools);
  } catch (err) {
    return next({ ...adminError, err });
  }
};
