const logger = (req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}]: ${req.method} request on ${req.url}`);
  next();
};

module.exports = logger;