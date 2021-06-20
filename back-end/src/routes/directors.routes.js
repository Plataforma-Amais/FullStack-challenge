const express = require('express');
const controllers = require('../controllers/director');
const middlewares = require('../middlewares');

const directors = express.Router();

directors.get('/',
  middlewares.authToken, middlewares.authDirector, controllers.getSchool);

directors.get('/teacher',
  middlewares.authToken, middlewares.authDirector, controllers.searchTeacher);

directors.get('/classes',
  middlewares.authToken, middlewares.authDirector, controllers.getClasses);

directors.get('/class',
  middlewares.authToken, middlewares.authDirector, controllers.getClass);
directors.post('/class',
    middlewares.authToken, middlewares.authDirector, controllers.createClass);
directors.put('/class',
    middlewares.authToken, middlewares.authDirector, controllers.updateClass);
directors.delete('/class',
  middlewares.authToken, middlewares.authDirector, controllers.removeClass);

module.exports = directors;
