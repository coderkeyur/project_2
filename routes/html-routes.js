var path = require("path");
var db = require("../models/chirp");

module.exports = function (app) {

    // index route loads view.html
    app.get("/", function(req, res) {
        db.Chirp.findAll({}).then(function(sequelize_chirp) {
          res.render("index", {
            Title: "Chirps!",
            Chirps: sequelize_chirp
          });
        });
      });
    
      app.post("/api/new", function(req, res) {

        console.log("Chirp Data:");
        console.log(req.body);
    
        Chirp.create({
          author: req.body.author,
          body: req.body.body,
          created_at: req.body.created_at
        }).then(function(results) {
          // `results` here would be the newly created chirp
          res.end();
        });
    
      });

    app.get("/dashboard", function (req, res) {
        res.render("dashboard");
    });

    app.get("*", function (req, res) {
        res.render("404");
    });

};