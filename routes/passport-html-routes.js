// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
      console.log('Welcome Member Root');
    }
    //res.sendFile(path.join(__dirname, "../public/signup.html"));
    console.log('Signup Page');
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
      console.log('Welcome Member Login');
    }
    //res.sendFile(path.join(__dirname, "../public/login.html"));
    console.log('Signup Page 2');
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    //res.sendFile(path.join(__dirname, "../public/members.html"));
    console.log('Welcome Member');
  });
};