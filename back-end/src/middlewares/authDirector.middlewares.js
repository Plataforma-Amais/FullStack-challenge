const errors = {
  accessDenied: 'C_ERR_ACC_DND',
};

module.exports = async (req, _res, next) => {
  try {
    if (req.userProfile !== 'director') throw new Error(errors.accessDenied);
    return next();
  } catch (err) {
    next({ err });
  }
};
