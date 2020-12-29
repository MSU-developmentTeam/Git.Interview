// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the home page
    if (req.user) {
      // When user is logged in is directed to its profile page
      res.redirect("/profile");
    }
    // Render login Handlebars page
    res.render("login.handlebars");
    console.log('Login Page');
  });

  app.get("/signup", (req, res) => {
    // If the user already has an account send them to the home page to login
    if (req.user) {
      res.redirect("/profile");
      console.log('Welcome Member Login');
    }
    // Render Handlebars page
    res.render("signup.handlebars");
    console.log('Signup Page');
  });

  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/profile", isAuthenticated, (req, res) => {
    res.render("profile.handlebars");
    console.log('Welcome Member');
  });
};