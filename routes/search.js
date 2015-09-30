var express = require('express');
var router = express.Router();
var models = require('../models/');
var Page = models.Page;
var User = models.User;

router.get('/', function(req, res, next) {
  console.log(req.query);
  if (req.query.tags) {
    var tags = req.query.tags.split(" ");
    Page.findByTag(tags).exec()
    .then(function(pages) {
      res.locals.pages = pages;
      res.render('index');
    });
  } else {
    res.render('searchpage');
  }
});

module.exports = router;
