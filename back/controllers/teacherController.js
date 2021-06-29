const { StatusCodes } = require('http-status-codes');

// const { teacherModel } = require('../models');
const { teacherService } = require('../services');

const createTeacher = async (req, res, next) => {
  try {
    const { name, materia, id_class } = req.body;
    const newTeacher = await teacherService.validateCreateTeacher(name, materia, id_class);
    res.status(StatusCodes.CREATED).json(newTeacher);
  } catch (error) {
    console.log(error);
    next({
      message: error.message,
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

const findAllTeachers = async (_req, res, next) => {
  try {
    const allTeachers = await teacherService.validateFindAll();
    res.status(StatusCodes.OK).json(allTeachers);
  } catch (error) {
    console.log(error);
    next({
      message: error.message,
      status: StatusCodes.NOT_FOUND,
    });
  }
};

const findTeacherById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const teacher = await teacherService.validateFindTeacherById(id);
    res.status(StatusCodes.OK).json(teacher);
  } catch (error) {
    console.log(error);
    next({
      message: error.message,
      status: StatusCodes.NOT_FOUND,
    });
  }
};

const deleteTeacherById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const teacher = await teacherService.validateDeleteTeacherById(id);
    res.status(StatusCodes.OK).json(teacher);
  } catch (error) {
    console.log(error);
    next({
      message: error.message,
      status: StatusCodes.BAD_REQUEST,
    });
  }
};

module.exports = {
  createTeacher,
  findAllTeachers,
  findTeacherById,
  deleteTeacherById,
};
