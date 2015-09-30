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
    status: req.body.pageStatus,
    tags: req.body.tags.split(' ')
  });
  page.save()
    .then(function(page) {
      res.redirect(page.route);
    });
});
//GET add-page
router.get('/add', function(req, res) {
  res.render('addpage');
});

router.get('/:urlTitle', function(req, res, next) {
  var urlTitle = req.params.urlTitle;
  var query = Page.findOne({urlTitle:urlTitle}).exec()
  .then(function(page) {
    res.locals.page = page;
    res.render('wikipage');
  });
});

router.get('/search', function(req, res, next) {

  res.render('searchpage');
});

module.exports = router;
