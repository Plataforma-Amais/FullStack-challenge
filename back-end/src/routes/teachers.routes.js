const express = require('express');
const controllers = require('../controllers/teacher');
const middlewares = require('../middlewares');

const teachers = express.Router();

teachers.get('/',
  middlewares.authToken, middlewares.authDirector, controllers.getTeachers);
// teachers.post('/students',
//   middlewares.authToken, middlewares.authDirector, controllers.createStudent);
// teachers.delete('/students',
//   middlewares.authToken, middlewares.authDirector, controllers.removeStudent);

module.exports = teachers;
