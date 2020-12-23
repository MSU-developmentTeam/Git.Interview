module.exports = function(sequelize, DataTypes) {
  const Question = sequelize.define("Question", {
    topic: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
    }
  });

  Question.associate = function(models) {
    //qestion should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Question.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Question;
};
