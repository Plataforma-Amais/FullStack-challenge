const express = require('express');
const controllers = require('../controllers/teacher');
const middlewares = require('../middlewares');

const teachers = express.Router();

teachers.get('/',
  middlewares.authToken, middlewares.authTeacher, controllers.getClasses);
teachers.post('/students',
  middlewares.authToken, middlewares.authTeacher, controllers.createStudent);
teachers.put('/students/',
  middlewares.authToken, middlewares.authTeacher, controllers.updateStudent);
teachers.delete('/students',
  middlewares.authToken, middlewares.authTeacher, controllers.removeStudent);

module.exports = teachers;
