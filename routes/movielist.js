var express = require('express');
var router = express.Router();

/* GET movies listing. */
router.get('/', function(req, res, next) {
    res.render('movielist', { title: 'movieslist' });
});

module.exports = router;