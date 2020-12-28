const db = require('../models');

module.exports = function (app) {
  app.get("/api/questions", function (req, res) {
    const query = {};
    if (req.query.author_id) {
      query.AuthorId = req.query.author_id;
    }
    // Finds all questions from all authors
    db.Question.findAll({
      where: query,
      include: [db.Author]
    }).then(function (dbQuestion) {
      res.json(dbQuestion);
    });
  });
  app.get("/api/questions/:topic", function (req, res) {
    db.Question.findAll({
      where: {
        topic: req.params.topic
      },
      include: [db.Author]
    }).then(function (dbQuestion) {
      res.json(dbQuestion);
    });

  });
  // Not getting to this route. Pierce to ask learning assistant
  app.post("/api/questions", function (req, res) {
    console.log("Api Questions this far...")
    db.Quesiton.create({
      topic: req.body.topic,
      body: req.body.body
    }).then(function () {
      res.json(req.user);
    }).catch(function (err) {
      res.status.json("404");
    })
    //if (err) console.log("err");
    
    //res.render("profile.handlebars");
  })
}