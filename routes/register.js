var express = require('express');
var router = express.Router();
// const bcrypt= require('bcrypt')

// const users=[];

/* GET register page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'register to MovieTrends' });
});
// router.post('/', function(req,res,next){
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10)
//     users.push({
//       id: Date.now().toString(),
//       name:req.body.name,
//       email:req.body.email,
//       password: hashedPasword
//     })
//     res.redirect('/login')
//   }catch{
//     res.redirect('/register')

//   }
//   console.log(users)
// })
module.exports = router;