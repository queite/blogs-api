const db = require('../database/models');

const categoryService = {
  create: async (name) => {
    const category = await db.Category.create({ name });
    return category;
  },

  list: async () => {
    const categories = await db.Category.findAll();
    return categories;
  },
};
module.exports = categoryService;