const { StatusCodes } = require('http-status-codes');
const { directors } = require('../../services');
const { schoolsError } = require('./error');

module.exports = async (req, res, next) => {
  try {
    const queries = req.query;
    const field = Object.keys(queries)[0];
    const query = queries[field];
    const result = await directors.searchTeacher(field, query);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return next({ ...schoolsError, err });
  }
};
