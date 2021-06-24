const { StatusCodes } = require('http-status-codes');

const createSchool = (req, res, next) => {
  try {
    throw new Error('DEU RUIM');
    res.status(StatusCodes.OK).send('FUNFOU');
  } catch (error) {
    console.log(error);
    next({
      message: error.message,
      status: StatusCodes.BAD_REQUEST,
    })
  }
};

module.exports = {
  createSchool,
};
