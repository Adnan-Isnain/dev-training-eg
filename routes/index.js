var express = require('express');
var router = express.Router();

/* GET home page. */
let counter = 0;
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Hello guys!!!', counter: counter });
});

/* POST increase counter by 1. */
router.post("/increase-counter", function (req, res, next) {
  counter = counter + 1;
  res.redirect("/");
});

module.exports = router;
