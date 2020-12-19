// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {

  // Home page
  app.get("/", function(req, res) {
    // Replace with handlebars file    
    //res.sendFile(path.join(__dirname, "../public/blog.html"));
    console.log('Index page');
  });

  // Login route
  app.get("/login", function(req, res) {
    // Replace with handlebars file    
    //res.sendFile(path.join(__dirname, "../public/cms.html"));
    console.log('login page');
    
  });

  // questions route
  app.get("/questions", function(req, res) {
    // Replace with handlebars file  
    //res.sendFile(path.join(__dirname, "../public/author-manager.html"));
    console.log('questions page');
  });

  // authors route
  app.get("/authors", function(req, res) {
    // Replace with handlebars file    
    //res.sendFile(path.join(__dirname, "../public/blog.html"));
    console.log('Authors page');
  });

};