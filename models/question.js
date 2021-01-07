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

  // Associating the Questions table with the Users table
  Question.associate = function(models) {
    
    Question.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Question;
};
