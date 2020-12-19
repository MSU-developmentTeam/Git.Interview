// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the home page
    if (req.user) {
      // See if needs to be changed if changed updated to /
      res.redirect("/members");
      console.log('Welcome Member Login');
    }
    // Replace with handlebars file
    // Replace with handlebars file  
    //res.sendFile(path.join(__dirname, "../public/login.html"));
    console.log('Signup Page 2');
  });
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    // Replace with handlebars file  
    //res.sendFile(path.join(__dirname, "../public/members.html"));
    console.log('Welcome Member');
  });
};