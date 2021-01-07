const db = require("../models");
const passport = require("../config/passport");
// Exporting Authentication Routes
module.exports = function(app) {
// Route to send user info from login to database
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Redirecting user to their profile once logged in
    res.redirect("/profile"); 
  });

  // Post Route to post user info to our DB
  app.post("/api/signup", (req, res) => {
    // Creating a new user
    db.User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        //Redirecting user
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        // Catching any errors
        res.status(401).json(err);
      });
  });

  // Route for logging user out and sending to the home page
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // User is logged in send back the user's email and id
      res.json({
        username: req.user.username,
        id: req.user.id
      });
    }
  });
};