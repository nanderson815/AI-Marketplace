var db = require("../models");
var VisualRecognitionV3 = require("watson-developer-cloud/visual-recognition/v3");

module.exports = function (app) {
  // Get all Products
  app.get("/api/products", function (req, res) {
    db.Product.findAll({
      include: [db.Category]
    }).then(function (dbProduct) {
      res.json(dbProduct);
    });
  });

  app.get("/api/products/:id", function (req, res) {
    db.Product.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Category]
    }).then(function (dbProduct) {
      res.json(dbProduct);
    });
  });

  // Create a new product
  app.post("/api/products", function (req, res) {
    db.Product.create(req.body).then(function (dbProduct) {
      res.json(dbProduct);
    });
  });

  // Delete an product by id
  app.delete("/api/products/:id", function (req, res) {
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbProduct) {
      res.json(dbProduct);
    });
  });

  // Update a product by ID
  app.put("/api/products", function (req, res) {
    db.Product.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbProduct) {
      res.json(dbProduct);
    });
  });

  // Get watson response
  app.get("/api/watson", function (req, res) {

    var visualRecognition = new VisualRecognitionV3({
      version: "2018-03-19",
      // eslint-disable-next-line camelcase
      iam_apikey: process.env.WATSON_KEY
    });

    var url = req.query.URL;

    var params = {
      url: url,
    };

    console.log(req.query.URL);
    visualRecognition.classify(params, function (err, response) {
      if (err) {
        console.log(err);
      } else {
        console.log(JSON.stringify(response, null, 2));
        res.json(response);
      }
    });
  });

  // Get all by category
  app.get("/api/categories", function (req, res) {
    db.Product.findAll(
      req.body,
      {
        where: {
          category: req.body.category
        }
      }).then(function (dbProduct) {
      res.json(dbProduct);
    });
  });

};


