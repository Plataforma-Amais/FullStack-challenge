const express = require('express');
const controllers = require('../controllers/users');

const users = express.Router();
users.post('/register', controllers.register);

module.exports = users;
