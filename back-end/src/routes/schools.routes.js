const express = require('express');
const controllers = require('../controllers/schools');
const middlewares = require('../middlewares');

const schools = express.Router();

schools.get('/',
  middlewares.authToken, middlewares.authDirector, controllers.getSchool);

schools.get('/classes',
  middlewares.authToken, middlewares.authDirector, controllers.getClasses);
schools.post('/classes',
  middlewares.authToken, middlewares.authDirector, controllers.createClass);
schools.delete('/classes',
  middlewares.authToken, middlewares.authDirector, controllers.removeClass);

module.exports = schools;
