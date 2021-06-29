const express = require('express');

const { teacherController } = require('../controllers');
const { createTeacher, findAllTeachers, findTeacherById, deleteTeacherById } = teacherController;

const TeacherRouter = express.Router();

TeacherRouter.post('/professor', createTeacher);
TeacherRouter.get('/professor/:id', findTeacherById);
TeacherRouter.get('/professores', findAllTeachers);
TeacherRouter.delete('/professor/:id', deleteTeacherById);

module.exports = TeacherRouter;
