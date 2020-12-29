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
  app.get("/questions", function(req, res) {
    //Renders Questions handlebars page
    console.log('questions page');
    res.render("question.handlebars");
  });

  // authors route
  app.get("/authors", function(req, res) {
    // Replace with handlebars file    
    console.log('Authors page');
  });

};