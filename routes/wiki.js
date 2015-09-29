var express = require('express');
var router = express.Router();
var models = require('../models/');
var Page = models.Page;
var User = models.User;


/* GET wiki pages */
router.get('/', function(req, res, next) {
  res.redirect('/');
  //res.send('GET wiki pages');
});
//POST wiki page
router.post('/', function(req, res, next) {
  var page = new Page({
    title: req.body.title,
    content: req.body.pageContent,
    status: req.body.pageStatus
  });

  page.save()
    .then(function(elem) {
      res.redirect('/wiki/add');
    });
});
//GET add-page
router.get('/add', function(req, res) {
  res.render('addpage');

});

module.exports = router;
