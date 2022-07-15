const db = require('../database/models');

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

  create: async (body) => {

  },
};

module.exports = postService;