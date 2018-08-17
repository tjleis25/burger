var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured], function() {
    // Send back the ID of the new burger
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var burgerID = req.params.id;

  burger.updateOne({
    devoured: req.body.devoured
  }, burgerID, function() {
      res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var burgerID = req.params.id;

  burger.delete(burgerID, function() {
    res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;
