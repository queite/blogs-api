const createPostCategory = (sequelize, DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignKey: true,
    },
  }, {
    tableName: 'PostCategories',
    timestamps: false,
  });

  PostCategory.associate = (db) => {
    db.Category.belongsToMany(db.BlogPost, {
      as: 'posts',
      through: 'PostCategory',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    db.BlogPost.belongsToMany(db.Category, {
      as: 'categories',
      through: 'PostCategory',
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  }

  return PostCategory;
};

module.exports = createPostCategory;