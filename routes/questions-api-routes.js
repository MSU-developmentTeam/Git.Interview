const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (app) {
  // Not getting to this route. Pierce to ask learning assistant
  app.post("/api/questions", function (req, res) {
    console.log("Api Questions this far...");
    console.log(req.user);
    db.Question.create({
      UserId: req.user.id,
      topic: req.body.topic,
      body: req.body.body
    }).then(function(){
      res.redirect("/profile");
    });
  });

  app.get("/questions", function (req, res) {
    const query = {};
    if (req.query.username) {
      query.Username = req.query.username;
    }
    // Finds all questions from all authors
    db.Question.findAll({
      where: query,
      include: [db.User]
    }).then(function (dbQuestion) {
      res.json(dbQuestion);
    });
  });

  app.get('/questions/search', function(req, res) {
    console.log('This Far ...');
    console.log(req.query)
    let { topic } = req.query;

    topic = topic.toLowerCase();

    db.Question.findAll({ 
    where: { topic: { [Op.like]: topic } },
    include: [db.body && db.User]
    }).then(topic => res.render('searchResults', { topic }))
  })

  app.get("/api/questions/:topic", function (req, res) {
    db.Question.findAll({
      where: {
        topic: req.params.topic
      },
      include: [db.User]
    }).then(function (dbQuestion) {
      res.json(dbQuestion);
    });
  });
};