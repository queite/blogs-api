const db = require('../database/models');

const categoryService = {
  create: async (name) => {
    const category = await db.Category.create({ name });
    return category;
  },
};
module.exports = categoryService;