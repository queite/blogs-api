const Sequelize = require('sequelize');
const db = require('../database/models');
const config = require('../database/config/config');

const sequelize = new Sequelize(config.development);

const postService = {
  list: async () => {
    const posts = await db.BlogPost.findAll({
      include: [
        {
        model: db.User,
        as: 'user',
        attributes: { exclude: 'password' },
        },
        { model: db.Category,
          as: 'categories',
          through: { attributes: [] }, // Elimina dados da tabela de junção PostCategories. O through vem da relação Belongs-to-Many. https://sequelize.org/docs/v6/advanced-association-concepts/eager-loading/
        },
      ],
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
};

module.exports = postService;