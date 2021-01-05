const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (app) {
  app.post("/api/questions", function (req, res) {
    //console.log(req.user);
    db.Question.create({
      UserId: req.user.id,
      topic: req.body.topic,
      body: req.body.body,
      answer: req.body.answer
    }).then(function(){
      res.redirect("/profile");
    });
  });

  // app.get("/questions/showall", function (req, res) {
  //   console.log("/questions ROUTE");
  //   // Finds all questions from all users
  //   db.Question.findAll({}).then(function () {
  //     //res.json(dbQuestion);
  //     res.render('profile');
  //   });
  // });

  // Search form route
  app.get('/questions/search', function(req, res) {
    let { topic } = req.query;
    //console.log(topic);
    
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
};