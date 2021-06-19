const express = require('express');
const cors = require('cors');
require('dotenv/config');

const app = express();

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerOptions = require('./src/openAPI/swaggerOptions');
const specs = swaggerJsDoc(swaggerOptions);

const routes = require('./src/main.routes');

app.use('/documentation', swaggerUI.serve, swaggerUI.setup(specs));
app.use(cors());
app.use(express.json());
app.use(routes);

module.exports = app;
