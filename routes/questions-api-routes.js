const db = require('../models');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

module.exports = function (app) {
  // route to create new Question in the db
  app.post("/api/questions", function (req, res) {
    db.Question.create({
      UserId: req.user.id,
      topic: req.body.topic,
      body: req.body.body,
      answer: req.body.answer
    }).then(function(){
      res.redirect("/profile");
    });
  });

  // Search route
  app.get('/questions/search', function(req, res) {
    let { topic } = req.query;
    
    // finds all questions where topic matches the searched topic
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