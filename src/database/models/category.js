const createCategory = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'Categories',
    timestamps: false,
  });

  Category.associate = (db) => {
    // User.hasMany(db.Pet, { as: 'pets', foreignKey: 'userId' });
  }

  return Category;
};

module.exports = createCategory;