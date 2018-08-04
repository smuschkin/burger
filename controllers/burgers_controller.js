var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burger", function (req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
      req.body.burger_name, req.body.devoured
    ], function (result) {
      res.json({ id: result.insertId });
    });
});

router.put("/api/burger/:id", function (req, res) {
  var burgerID = "id = " + req.params.id;

  console.log("burgerID", burgerID);

  burger.updateOne({
    devoured: req.body.devoured
  }, burgerID, function (result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;