const { StatusCodes } = require('http-status-codes');
const { users } = require('../../services');
const { profileError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const { body: { name }, userId } = req;
    await users.updateName(name, userId);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: 'Name updated successfully.' });
  } catch (err) {
    return next({ ...profileError, err });
  }
};
