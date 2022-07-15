require('dotenv/config');
const jwt = require('jsonwebtoken');

const jwtService = {
  createToken: (data) => {
    const token = jwt.sign({ data }, process.env.JWT_SECRET);
    return token;
  },

  validateToken: (token) => {
      const data = jwt.verify(token, process.env.JWT_SECRET);
      return data.data.id;
  },
};

module.exports = jwtService;