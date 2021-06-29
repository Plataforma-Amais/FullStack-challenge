const express = require('express');

const { classController } = require('../controllers');
const { createClass, findAllClasses, findClassById, deleteClassById } = classController;

const ClassRouter = express.Router();

ClassRouter.post('/turma', createClass);
ClassRouter.get('/turma/:id', findClassById);
ClassRouter.get('/turmas', findAllClasses);
ClassRouter.delete('/turma/:id', deleteClassById);

module.exports = ClassRouter;
