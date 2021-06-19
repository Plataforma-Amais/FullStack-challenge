const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'OPENBEER API',
      version: '1.0.0',
      description: 'Documentation Api OpenBeer',
    },
    servers: [
      {
        url: 'http://localhost:3001',
        description: 'Local server',
      },
    ],
    components: {
      securitySchemes: {
        apiKeyAuth: {
          type: 'apiKey',
          in: 'header',
          name: 'Authorization',
        },
      },
    },
    security: [
      {
        apiKeyAuth: [],
      },
    ],
  },
  apis: ['./src/openAPI/*.js'],
};

module.exports = swaggerOptions;
