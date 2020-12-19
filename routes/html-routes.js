// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {

  // Home page
  app.get("/", function(req, res) {
    //res.sendFile(path.join(__dirname, "../public/blog.html"));
    console.log('Index page');
  });

  // cms route loads cms.html
  app.get("/login", function(req, res) {
    //res.sendFile(path.join(__dirname, "../public/cms.html"));
    console.log('login page');
    
  });

  // authors route loads author-manager.html
  app.get("/questions", function(req, res) {
    //res.sendFile(path.join(__dirname, "../public/author-manager.html"));
    console.log('questions page');
  });

  app.get("/authors", function(req, res) {
    //res.sendFile(path.join(__dirname, "../public/blog.html"));
    console.log('Authors page');
  });

};