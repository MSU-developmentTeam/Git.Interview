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
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: true,
      len: [0]
    }
  });

  Question.associate = function(models) {
    //qestion should belong to User
    // A Post can't be created without a User due to the foreign key constraint
    Question.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Question;
};
