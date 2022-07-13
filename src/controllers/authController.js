const authService = require('../services/authService');
// const jwtService = require('../services/jwtService');
const { schemas, validateSchema } = require('../services/validations');

const authController = {
  login: async (req, res) => {
    const { email, password } = validateSchema(schemas.login, req.body);
    const token = await authService.login(email, password);

    res.status(200).json({ token });
  },

  // validateToken: (req, res, next) => {
  //   const { authorization } = req.headers;

  //   jwtService.validateToken(authorization);

  //   next();
  // },
};

module.exports = authController;