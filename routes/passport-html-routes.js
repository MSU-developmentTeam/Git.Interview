// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the home page
    if (req.user) {
      // See if needs to be changed if changed updated to /
      res.redirect("/profile");
      console.log('Welcome Member Login');
    }
    // Replace with handlebars file
    // Replace with handlebars file  
    //res.sendFile(path.join(__dirname, "../public/login.html"));
    res.render("login");
    console.log('Signup Page 2');
  });
  // TODOO...
  // This route sends the user to its own profile page
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/profile", isAuthenticated, (req, res) => {
    // Replace with handlebars file  
    //res.sendFile(path.join(__dirname, "../public/members.html"));
    console.log('Welcome Member');
  });
};