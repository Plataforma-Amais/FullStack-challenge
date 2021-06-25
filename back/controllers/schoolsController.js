const { StatusCodes } = require('http-status-codes');

// const { schoolModel } = require('../models');
const { schoolService } = require('../services');

const createSchool = async (req, res, next) => {
  try {
    const { name, director } = req.body;
    const newSchool = await schoolService.validateCreateSchool(name, director);
    res.status(StatusCodes.CREATED).json(newSchool);
  } catch (error) {
    console.log(error);
    next({
      message: error.message,
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const findAllSchool = async (_req, res, next) => {
  try {
    const allSchool = await schoolService.validateFindAll();
    res.status(StatusCodes.OK).json(allSchool);
  } catch (error) {
    console.log(error);
    next({
      message: error.message,
      status: StatusCodes.NOT_FOUND,
    });
  }
};

const findSchoolById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const school = await schoolService.validateFindSchoolById(id);
    res.status(StatusCodes.OK).json(school);
  } catch (error) {
    console.log(error);
    next({
      message: error.message,
      status: StatusCodes.NOT_FOUND,
    });
  }
};

const deleteSchoolById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const school = await schoolService.validateDeleteSchoolById(id);
    res.status(StatusCodes.OK).json(school);
  } catch (error) {
    console.log(error);
    next({
      message: error.message,
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

module.exports = {
  createSchool,
  findAllSchool,
  findSchoolById,
  deleteSchoolById,
};
