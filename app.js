var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

//var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


const https = require('https');
var request = require('request');



app.get('/', function(req, res) {       

      request.post({ url: "https://www.apnikheti.com/apnikheti-version9/getCategory.php?lang=en",body : "lang=en"},    function(error, response, body) { 
              if (!error && response.statusCode == 200) { 
                  res.render("index",{body:JSON.parse(body)});
		  console.log(JSON.parse(body));
                 } 
             }); 
     }); 


/*TEXT API*/
var msg = 'Dear Apni Kheti user, the verfication code for registering with mobile number is 123456';
var toNumber = '9706202403';
var username = 'taran.sidhu@cogneesol.com';
var hash = 'f218887ba4be38c3ca8fa2bf943bbd8824bbbd63';
var sender = 'AKHETI';
var data = 'username=' + username + '&hash=' + hash + '&sender=' + sender + '&numbers=' + toNumber + '&message=' + msg;

app.get('/textapi', function(req, res) {       
      request.get({ url: "https://api.textlocal.in/send/?"+ data},      function(error, response, body) { 
              if (!error && response.statusCode == 200) { 
                  res.end(body); 
                 } 
             }); 
     }); 


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

module.exports = app;

