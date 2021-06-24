const { StatusCodes } = require('http-status-codes');

const { classModel } = require('../models');
const { classService } = require('../services');

const createClass = async (req, res, next) => {
  try {
    const { name, professor, id_school } = req.body;
    const newClass = await classService.validateCreateClass(
      name,
      professor,
      id_school,
    );
    res.status(StatusCodes.CREATED).json(newClass);
  } catch (error) {
    console.log(error);
    next({
      message: error.message,
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const findAllClasses = async (_req, res, next) => {
  try {
    const allClasses = await classModel.findAllClasses();
    res.status(StatusCodes.OK).json(allClasses);
  } catch (error) {
    console.log(error);
    next({
      message: error.message,
      status: StatusCodes.NOT_FOUND,
    });
  }
};

const findClassById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const classResult = await classService.validateFindClassById(id);
    res.status(StatusCodes.OK).json(classResult);
  } catch (error) {
    console.log(error);
    next({
      message: error.message,
      status: StatusCodes.NOT_FOUND,
    });
  }
};

const deleteClassById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const classResult = await classService.validateDeleteClassById(id);
    res.status(StatusCodes.NO_CONTENT).json(classResult);
  } catch (error) {
    console.log(error);
    next({
      message: error.message,
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

module.exports = {
  createClass,
  findAllClasses,
  findClassById,
  deleteClassById,
};
