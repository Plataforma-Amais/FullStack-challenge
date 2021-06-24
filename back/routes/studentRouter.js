const express = require('express');

const { studentController } = require('../controllers');
const { createStudent, findAllStudent, findStudentById, deleteStudentById } = studentController;

const StudentRouter = express.Router();

StudentRouter.post('/estudante', createStudent);
StudentRouter.get('/estudante/:id', findStudentById);
StudentRouter.get('/estudantes', findAllStudent);
StudentRouter.delete('/estudante/:id', deleteStudentById);

module.exports = StudentRouter;
