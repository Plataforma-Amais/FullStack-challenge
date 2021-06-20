const errors = {
  accessDenied: 'C_ERR_ACC_DND',
};

module.exports = (req, _res, next) => {
  try {
    if (req.userProfile !== 'admin') throw new Error(errors.accessDenied);
    return next();
  } catch (err) {
    next({ err });
  }
};