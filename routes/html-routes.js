// Dependencies
var path = require("path");

// Routes
module.exports = function(app) {

  // Home page
  app.get("/", function(req, res) {
    // Replace with handlebars file    
    //res.sendFile(path.join(__dirname, "../public/blog.html"));
    res.render("index");
    console.log('Index page');
  });

  // questions route
  app.get("/api/questions", function(req, res) {
    // Replace with handlebars file  
    //res.sendFile(path.join(__dirname, "../public/author-manager.html"));
    console.log('questions page');
    res.render("question.handlebars");
  });

  // authors route
  app.get("/authors", function(req, res) {
    // Replace with handlebars file    
    //res.sendFile(path.join(__dirname, "../public/blog.html"));
    console.log('Authors page');
  });

};