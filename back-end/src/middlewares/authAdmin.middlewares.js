const { verifyToken } = require('../security');

const errors = {
  C_ERR_NO_TOKEN: 'C_ERR_NO_TOKEN',
  C_ERR_ACC_DND: 'C_ERR_ACC_DND',

};

module.exports = (req, _res, next) => {
  try {
    const { authorization: token } = req.headers;
    if (!token) throw new Error(errors.C_ERR_NO_TOKEN);
    const { role } = verifyToken(token);
    if (role !== 'administrator') throw new Error(errors.C_ERR_ACC_DND);
    return next();
  } catch (err) {
    next({ err });
  }
};