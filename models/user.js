const { Model } = require("sequelize");
// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
      },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true, 
        address: String,
        verified: String || Boolean,

      }
    },
  
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  // Seeing if the passworded entered by the user matches the one in our DB
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  
  // Hashing the password before the User is created
  User.addHook("beforeCreate", user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });
// When an User is deleted their questions are as well
  User.associate= function (models) {
    User.hasMany(models.Question, {
      onDelete: "cascade"
    });
  }

  return User;
};