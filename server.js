const express = require('express');
const session = require('express-session');
const passport = require('./config/passport');
const dotenv = require("dotenv");

dotenv.config({path: './config/config.env'})
// set Handlebars
var exphbs = require("express-handlebars");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// handlebar templates
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Requiring our routes
require("./routes/passport-html-routes.js")(app);
require("./routes/passport-api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/questions-api-routes")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});