const userService = require('../services/userService');
const { schemas, validateSchema } = require('../services/validations');
const jwtService = require('../services/jwtService');

const userController = {
  createUser: async (req, res) => {
    const validatedUser = validateSchema(schemas.user, req.body);
    console.log(validatedUser);
    const { displayName, email, password, image } = validatedUser;
    await userService.findByEmail(email);

    await userService.createUser({ displayName, email, password, image });
    const token = jwtService.createToken({ email, password });

    res.status(201).json({ token });
  },

  listAll: async (req, res) => {
    const users = await userService.listAll();
    res.status(200).json(users);
  },

  getById: async (req, res) => {
    const { id } = req.params;
    const user = await userService.getById(id);
    res.status(200).json(user);
  },
};

module.exports = userController;