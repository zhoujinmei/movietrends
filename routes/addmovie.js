var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

/* GET movies listing. */
router.get('/', function(req, res, next) {
    res.render('addmovie', { title: 'movieslist' });
});

// new movie route
// router.get('/',async(req,res)=>{
//     try{
//         const movie = new Movie()
//         res.render('/addmovie')
//     }catch{
//         res.redirect('/movielist')
//     } 

// })

//edite movie route
router.post('/',async(req,res)=>{
    const movie = new movie({
        movieName:req.body.movieName,
        publishDate:req.body.publishDate,

    })
})

module.exports = router;