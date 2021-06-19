const express = require('express');
const controllers = require('../controllers/schools');
const middlewares = require('../middlewares');

const schools = express.Router();

schools.get('/', middlewares.authToken, middlewares.authDirector, controllers.getSchool);

module.exports = schools;
