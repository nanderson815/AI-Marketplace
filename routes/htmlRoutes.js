var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    db.Product.findAll({}).then(function (dbProducts) {
      res.render("index", {
        product: dbProducts
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function (req, res) {
    db.Product.findOne({where: {id: req.params.id}}).then(function(dpProducts){
      res.render("addProduct", {
        product: dpProducts
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {

  });
};
