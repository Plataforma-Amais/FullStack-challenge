const express = require('express');

const { schoolsController } = require('../controllers');
const { createSchool } = schoolsController;

const SchoolsRouter = express.Router();

SchoolsRouter.post('/escola', createSchool);

module.exports = SchoolsRouter;
