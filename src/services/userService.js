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

  create: async ({ displayName, email, password, image }) => {
    const user = await db.User.create({ displayName, email, password, image });
    return user.datavalues;
  },

  list: async () => {
    const users = await db.User.findAll({
      attributes: { exclude: ['password'] },
    });
    return users;
  },

  getById: async (id) => {
    const user = await db.User.findByPk(id, {
      attributes: { exclude: ['password'] },
    });

    if (!user) {
      const err = new Error('User does not exist');
      err.name = 'NotFoundError';
      throw err;
    }
    return user;
  },
};

module.exports = userService;