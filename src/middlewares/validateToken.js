const jwtService = require('../services/jwtService');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) res.status(401).json({ message: 'Token not found' });

  const id = jwtService.validateToken(authorization);
  req.user = id;
  next();
};