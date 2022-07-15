const userService = require('../services/userService');
const { schemas, validateSchema } = require('../services/validations');
const jwtService = require('../services/jwtService');

const userController = {
  create: async (req, res) => {
    const validatedUser = validateSchema(schemas.user, req.body);
    const { displayName, email, password, image } = validatedUser;
    await userService.findByEmail(email);

    const { id } = await userService.create({ displayName, email, password, image });
    const token = jwtService.createToken({ id, email, password });

    res.status(201).json({ token });
  },

  list: async (req, res) => {
    const users = await userService.list();
    res.status(200).json(users);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const user = await userService.getById(id);
    res.status(200).json(user);
  },

  delete: async (req, res) => {
    await userService.delete(req.user);
    res.status(204).end();
  },
};

module.exports = userController;