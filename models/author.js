module.exports = function (sequelize, DataTypes) {
  const Author = sequelize.define("Author", {
    // Giving the Author model a name of type STRING
    name: DataTypes.STRING
  });

  Author.associate = function (models) {
    // Associating Author with Questions
    // When an Author is deleted, also delete any associated Posts
    Author.hasMany(models.Question, {
      onDelete: "cascade"
    });
    // user should be linked to an author
    // Post cannot be created without an Author
    Author.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Author;
};
