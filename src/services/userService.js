const db = require('../database/models');

const userService = {
  findByEmail: async (email) => {
    const registeredEmail = await db.User.findOne({
        where: { email },
    });

    if (registeredEmail) {
      const err = new Error('User already registered');
      err.name = 'AlreadyRegistered';
      throw err;
    }
  },

  createUser: async ({ displayName, email, password, image }) => {
    const user = await db.User.create({ displayName, email, password, image });
    return user.datavalues;
  },
};

module.exports = userService;