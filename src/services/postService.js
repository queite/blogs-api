const Sequelize = require('sequelize');
const db = require('../database/models');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const includeUserCategory = [
  {
  model: db.User,
  as: 'user',
  attributes: { exclude: 'password' },
  },
  { model: db.Category,
    as: 'categories',
    through: { attributes: [] }, // Elimina dados da tabela de junção PostCategories. O through vem da relação Belongs-to-Many. https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/
  },
];

const postService = {
  list: async () => {
    const posts = await db.BlogPost.findAll({
      include: includeUserCategory,
    });
    return posts;
  },

  create: async (data) => {
    const { id, categoryIds, title, content } = data;

    const result = await sequelize.transaction(async (t) => {
      const post = await db.BlogPost.create({ title, content, userId: id }, { transaction: t });

      const postId = post.id;
      const postCategory = categoryIds.map((item) => ({ categoryId: item, postId }));

      await db.PostCategory.bulkCreate(postCategory, { transaction: t });
      return post;
    });
    return result;
  },

  getById: async (id) => {
    const post = await db.BlogPost.findByPk(id, {
      include: includeUserCategory,
    });

    if (!post) {
      const err = new Error('Post does not exist');
      err.name = 'NotFoundError';
      throw err;
    }

    return post;
  },

  update: async (postId, title, content) => {
    const post = await db.BlogPost.update({ title, content },
      { where: { id: postId } });
    return post;
  },
};

module.exports = postService;