var express = require('express');
var path = require('path');
var util = require('util');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
var mongoose = require('mongoose');

var edevices = require('./routes/edevice');
var users = require('./routes/users');
var properties = require('./routes/property');

var app = express();

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

var requestTime = function (req, res, next) {
  req.requestTime = Date.now();
  console.log(req.requestTime );
  next();
};

var expiryDate = new Date( Date.now() + 60 * 60 * 1000 ); // 1 hour

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
app.use(cookieSession({
      name: 'session',
      keys: ['key1', 'key2'],
      cookie: { secure: true,
        httpOnly: true,
        domain: 'example.com',
        path: 'foo/bar',
        expires: expiryDate
      }
    })
);

var connectMogo = function() {
  // Build the connection string
  var dbURI = 'mongodb://localhost:27017/homesolution';

// Create the database connection
  mongoose.connect(dbURI);

// CONNECTION EVENTS
// When successfully connected
  mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
  });

// If the connection throws an error
  mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
  });

// When the connection is disconnected
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
  });
};

connectMogo();
app.use(myLogger,requestTime);

app.all('*', function(req, res, next){
  console.log('request coming');
  next();
});

app.use('/homesolution/edevices', edevices);
app.use('/homesolution/users', users);
app.use('/homesolution/property', properties);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
