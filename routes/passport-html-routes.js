const db = require('../models');
// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const isEmail = require('../models/user');
module.exports = function (app) {

  app.get("/login", (req, res) => {
    // If the user already has an account send them to their profile page
    if (req.user) {
      // When user is logged in is directed to its profile page
      res.redirect("/profile");
    }
    // Render login page if user is not logged in || Does not have an account
    res.render("login.handlebars");
  });

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to their profile page 
    if (req.user) {
      res.redirect("/profile");
    } else if (!isEmail) {
      // Render signup page
      res.render("signup.handlebars");
    }
    // Render Handlebars page
    res.render("signup.handlebars")
  });

  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/profile", isAuthenticated, (req, res) => {
    // Database Query
    db.Question.findAll({
      where: {
        UserId: req.user.id
      }
    }).then(function (dbQuestion) {
      // Renders the profile page with user's posted questions
      res.render('profile', { Question: dbQuestion });
    });
  });
};