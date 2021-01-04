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
      body: req.body.body,
      answer: req.body.answer
    }).then(function(){
      res.redirect("/profile");
    });
  });

  app.get("/api/questions", function (req, res) {
    const query = {};
    console.log(req.query.username)
    if (req.query.username) {
      console.log('Inside IF')
      query.Username = req.query.username;
      db.Question.findAll({
        where: query,
        include: [db.User]
      }).then(function (dbQuestion) {
        res.json(dbQuestion);
      });
    }
    console.log('Outside IF')
    // Finds all questions from all authors
    db.Question.findAll({
      where: query,
      include: [db.User]
    }).then(function (dbQuestion) {
      res.json(dbQuestion);
    });
  });
  // Search form
  app.get('/questions/search', function(req, res) {
    // console.log('This Far ...');
    // console.log(req.query)
    let { topic } = req.query;
    console.log(topic);
    
    db.Question.findAll({ 
    where: { topic: { [Op.like]: topic } },
    include: [db.User]
    }).then(function(topic) {
      console.log(topic)
      res.render('searchResults', { Question: topic })
    }).catch(function(err) {
      console.log(err);
    });
  });

  // app.get("questions/:topic", function (req, res) {
  //   db.Question.findAll({
  //     where: { topic: { [Op.like]: topic } },
  //   include: [db.Question && db.User]
  //   }).then(function(topic) {
  //     console.log(topic)
  //     res.render('searchResults', { topic })
  //   });
  // });
};