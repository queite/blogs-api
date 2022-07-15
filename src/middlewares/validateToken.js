const jwtService = require('../services/jwtService');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) res.status(401).json({ message: 'Token not found' });

  jwtService.validateToken(authorization);
  next();
};