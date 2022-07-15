const { schemas, validateSchema } = require('../services/validations');
const postService = require('../services/postService');
const categoryService = require('../services/categoryService');

const postController = {
  list: async (req, res) => {
    const posts = await postService.list();
    res.status(200).json(posts);
  },

  create: async (req, res) => {
    const { categoryIds } = req.body;
    validateSchema(schemas.post, req.body);
    await categoryService.checkIfExists(categoryIds);

    const post = await postService.create(req.body);
    res.status(201).json(post);
  },
};

module.exports = postController;