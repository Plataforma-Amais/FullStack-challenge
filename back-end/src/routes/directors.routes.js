const express = require('express');
const controllers = require('../controllers/director');
const middlewares = require('../middlewares');

const directors = express.Router();

directors.get('/',
  middlewares.authToken, middlewares.authDirector, controllers.getSchool);
  directors.get('/teacher',
  middlewares.authToken, middlewares.authDirector, controllers.searchTeacher);

directors.get('/class',
  middlewares.authToken, middlewares.authDirector, controllers.getClass);
directors.get('/classes',
  middlewares.authToken, middlewares.authDirector, controllers.getClasses);
directors.post('/classes',
  middlewares.authToken, middlewares.authDirector, controllers.createClass);
directors.delete('/classes',
  middlewares.authToken, middlewares.authDirector, controllers.removeClass);

module.exports = directors;
