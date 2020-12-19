const db = require('../models');

module.exports = function(app) {
    app.get("/api/authors", function(req, res) {
        // Getting all of the Authors from our DB
        db.Author.findAll({
            include: [db.Question]
        }).then(function(dbAuthor) {
            res.json(dbAuthor);
        });
        console.log(res);
      });

    app.get("/api/authors/:id", function(req, res) {
        // Getting user specific info
        db.Author.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Question]
        }).then(function(dbAuthor) {
            res.json(dbAuthor);
        });
        // console logging response to see what comes back
        console.log(res);
    });
}