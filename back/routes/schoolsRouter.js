const express = require('express');

const { schoolsController } = require('../controllers');
const { createSchool, findAllSchool, findSchoolById, deleteSchoolById } =
  schoolsController;

const SchoolsRouter = express.Router();

SchoolsRouter.post('/escola', createSchool);
SchoolsRouter.get('/escola/:id', findSchoolById);
SchoolsRouter.get('/escolas', findAllSchool);
SchoolsRouter.delete('/escola/:id', deleteSchoolById);

module.exports = SchoolsRouter;
