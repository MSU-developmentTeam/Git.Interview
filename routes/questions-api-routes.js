const db = require('../models');

module.exports = function(app) {
    app.get("/api/questions", function(req, res) {
        const query = {};
        if (req.query.author_id) {
          query.AuthorId = req.query.author_id;
        }
       // Need to add condition to display general vs user's questions
        db.Question.findAll({
          where: query,
          include: [db.Author]
        }).then(function(dbQuestion) {
          res.json(dbQuestion);
        });
      });
}