var express = require('express');
var router = express.Router();
var models = require('../models/');
var Page = models.Page;
var User = models.User;

/* GET home page. */
router.get('/', function(req, res, next) {
  Page.find().exec()
  .then(function(pages) {
    res.locals.pages = pages;
    res.render('index');
  });
});

module.exports = router;
