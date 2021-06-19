const errors = {
  C_ERR_NO_TOKEN: 'C_ERR_NO_TOKEN',
  C_ERR_ACC_DND: 'C_ERR_ACC_DND',

};

module.exports = (req, _res, next) => {
  try {
    if (req.userProfile !== 'director') throw new Error(errors.C_ERR_ACC_DND);
    return next();
  } catch (err) {
    next({ err });
  }
};