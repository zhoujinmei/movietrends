var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('movie', { title: 'movie' });
});

module.exports = router;