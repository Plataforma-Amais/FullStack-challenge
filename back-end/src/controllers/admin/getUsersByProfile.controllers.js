const { StatusCodes } = require('http-status-codes');
const { admin } = require('../../services');
const { adminError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { params: { profile } } = req;
    const directors = await admin.getUsersByProfile(profile);
    return res.status(StatusCodes.OK).json(directors);
  } catch (err) {
    return next({ ...adminError, err });
  }
};
