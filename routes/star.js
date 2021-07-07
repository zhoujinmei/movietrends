var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('star', { title: 'Star Information' });
});

module.exports = router