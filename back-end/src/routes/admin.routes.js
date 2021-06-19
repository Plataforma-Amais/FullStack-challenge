const express = require('express');

const controllers = require('../controllers/admin');
const middlewares = require('../middlewares');

const admin = express.Router();

admin.post('/schools/create',
  middlewares.authToken, middlewares.authAdmin, controllers.createSchool);
admin.put('/schools/edit',
  middlewares.authToken, middlewares.authAdmin, controllers.updateSchool);
admin.delete('/school/',
  middlewares.authToken, middlewares.authAdmin, controllers.removeSchool);
admin.get('/schools/',
  middlewares.authToken, middlewares.authAdmin, controllers.getSchools);
admin.get('/users/:profile',
  middlewares.authToken, middlewares.authAdmin, controllers.getUsersByProfile);
admin.get('/users/',
  middlewares.authToken, middlewares.authAdmin, controllers.getUsers);
admin.delete('/user/',
  middlewares.authToken, middlewares.authAdmin, controllers.removeUser);

module.exports = admin;
