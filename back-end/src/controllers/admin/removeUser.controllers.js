const { StatusCodes } = require('http-status-codes');
const { admin } = require('../../services');
const { adminError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body: { userId } } = req;
    await admin.removeUser(userId);
    return res.status(StatusCodes.OK).json({ message: 'User deleted.' });
  } catch (err) {
    return next({ ...adminError, err });
  }
};
