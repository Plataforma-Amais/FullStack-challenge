const express = require('express');

const controllers = require('../controllers/session');

const session = express.Router();

session.post('/', controllers.login);

module.exports = session;
