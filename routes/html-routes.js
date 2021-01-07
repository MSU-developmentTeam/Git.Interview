// Exporting HTML Routes
module.exports = function(app) {

  // Home page
  app.get("/", function(req, res) {
    // renders main page
    res.render("index");
    console.log('Index page');
  });

  // questions page
  app.get("/questions", function(req, res) {
    //Renders Questions handlebars page
    res.render("question.handlebars");
  });
};