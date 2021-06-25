const { StatusCodes } = require('http-status-codes');

// const { studentModel } = require('../models');
const { studentService } = require('../services');

const createStudent = async (req, res, next) => {
  try {
    const { name, parents, contacts, id_class } = req.body;
    const newStudent = await studentService.validateCreateStudent(
      name,
      parents,
      contacts,
      id_class,
    );
    res.status(StatusCodes.CREATED).json(newStudent);
  } catch (error) {
    console.log(error);
    next({
      message: error.message,
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const findAllStudent = async (_req, res, next) => {
  try {
    const allStudent = await studentService.validateFindAll();
    res.status(StatusCodes.OK).json(allStudent);
  } catch (error) {
    console.log(error);
    next({
      message: error.message,
      status: StatusCodes.NOT_FOUND,
    });
  }
};

const findStudentById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await studentService.validateFindStudentById(id);
    res.status(StatusCodes.OK).json(student);
  } catch (error) {
    console.log(error);
    next({
      message: error.message,
      status: StatusCodes.NOT_FOUND,
    });
  }
};

const deleteStudentById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const student = await studentService.validateDeleteStudentById(id);
    res.status(StatusCodes.NO_CONTENT).json(student);
  } catch (error) {
    console.log(error);
    next({
      message: error.message,
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

module.exports = {
  createStudent,
  findAllStudent,
  findStudentById,
  deleteStudentById,
};
