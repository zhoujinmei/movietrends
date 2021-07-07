const express = require('express');
const router = express.Router();

//All Director Route
router.get('/', function(req, res, next) {
    res.render('director', { title: 'Director Information' });
  });

module.exports = router;