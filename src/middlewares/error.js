module.exports = (err, _req, res, _next) => {
  const errors = {
    ValidationError: 400,
    UnauthorizedError: 400,
    AlreadyRegistered: 409,
    JsonWebTokenError: 401,
    NotFoundError: 404,
  };

  const { name, message } = err;
  if (errors[name] === 401) {
    return res.status(errors[name]).json({ message: 'Expired or invalid token' });
  }
  if (errors[name]) res.status(errors[name]).json({ message });
  res.sendStatus(500).json({ message });
};

// if (name === 'ValidationError' || 'UnauthorizedError' ) res.status(400).json({ message });
// if (name === 'AlreadyRegistered') res.status(409).json({ message });
// if (name === 'JsonWebTokenError') res.status(401).json({ message: 'Expired or invalid token' });
// if (name === 'NotFoundError') res.status(404).json({ message });
// res.sendStatus(500).json({ message });