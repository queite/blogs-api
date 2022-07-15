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

  checkIfExists: async (categoriesArray) => {
    const existingCategory = await Promise.all(categoriesArray
      .map((id) => db.Category.findByPk(id)));
    const categories = existingCategory.filter((category) => category !== null);

    if (!categories.length) {
      const err = new Error('"categoryIds" not found"User already registered');
      err.name = 'ValidationError';
      throw err;
    }
    return categories;
  },
};
module.exports = categoryService;