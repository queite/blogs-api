const jwtService = require('./jwtService');
const db = require('../database/models');

const authService = {

  login: async (email, password) => {
    const user = await db.User.findOne({
      where: { email },
    });

    if (!user || password !== user.dataValues.password) {
      const err = new Error('Invalid fields');
      err.name = 'UnauthorizedError';
      throw err;
    }

    const token = jwtService.createToken({ email: user.email, id: user.id });
    return token;
  },
};

module.exports = authService;