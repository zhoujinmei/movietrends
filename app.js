var createError = require('http-errors');
var express = require('express');
const mongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended:false});
mongoClient.connect(dburl,function(err,client){
  console.log('Connected with DB');
})
const dburl = "mongodb://localhost:27017";
const app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var port = 3001;
var passport = require('passport');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var movieRouter = require('./routes/movie');
var movielistRouter=require('./routes/movielist');
var initializePassport=require('./routes/passport-config');
const { listenerCount } = require('events');

initializePassport(passport);
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/movie', movieRouter);
app.use('/movielist', movielistRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
app.listen(port,(req,res)=>{
  console.log(`Project is listening on ${port}`)
})

module.exports = app;
