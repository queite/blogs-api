const { schemas, validateSchema } = require('../services/validations');
const postService = require('../services/postService');
const categoryService = require('../services/categoryService');
const jwtService = require('../services/jwtService');

const postController = {
  list: async (req, res) => {
    const posts = await postService.list();
    res.status(200).json(posts);
  },

  create: async (req, res) => {
    const { categoryIds, title, content } = req.body;
    validateSchema(schemas.post, req.body);
    const categories = await categoryService.checkIfExists(categoryIds);
    const verifydCategoryId = categories.map((category) => category.id);

    const post = await postService.create({
      id: req.user,
      title,
      content,
      categoryIds: verifydCategoryId,
    });
    res.status(201).json(post);
  },

  getById: async (req, res) => {
    const post = await postService.getById(req.params.id);
    res.status(200).json(post);
  },

  update: async (req, res) => {
    const { id } = req.params;
    const { title, content } = validateSchema(schemas.updatePost, req.body);
    const userId = jwtService.validateToken(req.headers.authorization);
    const post = await postService.getById(id);
    if (userId !== post.user.id) res.status(401).json({ message: 'Unauthorized user' });

    await postService.update(id, title, content);
    const updatedPost = await postService.getById(id);
    res.status(200).json(updatedPost);
  },
};

module.exports = postController;