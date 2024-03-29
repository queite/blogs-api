module.exports = (err, req, res, _next) => {
  const errors = {
    ValidationError: 400,
    UnauthorizedError: 400,
    AlreadyRegistered: 409,
    JsonWebTokenError: 401,
    NotFoundError: 404,
    UnauthorizedUser: 401,
  };

  const { name, message } = err;
  if (name === 'JsonWebTokenError') {
    return res.status(errors[name]).json({ message: 'Expired or invalid token' });
  }
  if (errors[name]) res.status(errors[name]).json({ message });
  res.sendStatus(500).json({ message });
};