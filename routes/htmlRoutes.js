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
  app.get("/product/:id", function (req, res) {
    db.Product.findOne({ where: { id: req.params.id } }).then(function (dpProducts) {
      res.render("partials/actions/editProduct", {
        product: dpProducts
      });
    });
  });

  // Renders Page for adding a new product
  app.get("/addProduct", function (req, res) {
    res.render("addProduct");
  });

  // Renders Products by Category
  app.get("/addCategories/:category", function (req, res) {
    db.Product.findAll({
      where: {
        category: req.params.category
      }
    }).then(function (dbProducts) {
      res.render("addCategories", {
        cat: req.params.category,
        category: dbProducts
      });
    });
  });


  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });


};