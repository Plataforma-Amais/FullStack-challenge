const errorMidleware = (err, _req, res, _next) => {
  const { message, status } = err;
  res.status(status).json({
    message,
  });
};

module.exports = errorMidleware;
