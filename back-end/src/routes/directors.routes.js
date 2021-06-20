const express = require('express');
const controllers = require('../controllers/director');
const middlewares = require('../middlewares');

const directors = express.Router();

directors.get('/',
  middlewares.authToken, middlewares.authDirector, controllers.getSchool);

directors.get('/classes',
  middlewares.authToken, middlewares.authDirector, controllers.getClasses);
directors.post('/classes',
  middlewares.authToken, middlewares.authDirector, controllers.createClass);
directors.delete('/classes',
  middlewares.authToken, middlewares.authDirector, controllers.removeClass);

directors.get('/students',
  middlewares.authToken, middlewares.authDirector, controllers.getStudents);
directors.post('/students',
  middlewares.authToken, middlewares.authDirector, controllers.createStudent);
directors.delete('/students',
  middlewares.authToken, middlewares.authDirector, controllers.removeStudent);

module.exports = directors;
