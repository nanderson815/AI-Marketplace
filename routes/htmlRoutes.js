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

  // Load update page and pass in an example by id
  app.get("/UpdateProduct/:id", function (req, res) {
    db.Product.findOne({where: {id: req.params.id}}).then(function(dpProducts){
      res.render("editProduct", {
        product: dpProducts
      });
    });
  });

  // Renders Page for adding a new product
  app.get("/addProduct", function(req, res){
    res.render("addProduct");
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};
