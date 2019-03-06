var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/products", function(req, res) {
    db.Product.findAll({
      include: [db.Category]
    }).then(function(dbProduct){
      res.json(dbProduct);
    });
  });

  // Create a new example
  app.post("/api/products", function(req, res) {
    db.Product.create(req.body).then(function(dbProduct){
      res.json(dbProduct);
    });
  });

  // Delete an example by id
  app.delete("/api/products/:id", function(req, res) {
    
  });
};
