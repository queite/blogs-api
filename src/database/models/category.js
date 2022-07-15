const createCategory = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  }, {
    tableName: 'Categories',
    timestamps: false,
  });

  return Category;
};

module.exports = createCategory;