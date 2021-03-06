// server.js
// modules =================================================
var express = require('express');
var morgan = require('morgan');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var fs = require('fs');
var url = require('url');
var http = require('http');
var path = require('path');
var uriUtil = require("mongodb-uri");
var util = require('util');
//authentication
var passport = require('passport');
var session = require('express-session');
// set the static files location /public/img will be /img for users
console.log("Before defining app static route");
app.use('/', express.static(__dirname + '/public'));

// set our port
var port = process.env.PORT || 8080;
app.set('port', port); 

// get all data/stuff of the body (POST) parameters
app.use(morgan('dev'));

// parse application/json 
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(session({ 
	secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}));

// var allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//   if ('OPTIONS' === req.method) {
//     res.send(200);
//   } else {
//     next();
//   }
// };

// app.use(allowCrossDomain);
// Create the database connection 
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } }; 

// Build the connection string to MongoDb
var dbUrl = require('./config/db');
var mongooseUri = uriUtil.formatMongoose(dbUrl.url);
console.log("mongooseDB URI:" + mongooseUri);

var db = mongoose.connection;

// If the connection throws an error
db.on('error', function(err) {
	console.log("ERROR connection to MongoDB server " + err);
});

// When the connection is disconnected
db.on('disconnected', function () {  
  console.log('DISCONNECT from MongoDB server'); 
});

// When the connection is closed
db.on('close', function () {
    console.log('CLOSE connection to MongoDB server');
});


// When the connection is reconnected
db.on('reconnect', function () {
    console.log('RECONNECT to MongoDB server');
});


// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  db.close(function () { 
    console.log('DISCONNECT from MongoDB server through app termination'); 
    process.exit(0); 
  }); 
}); 

console.log('Sending connecting request with MongoDB server');
mongoose.connect(mongooseUri);

  // Initialize Passport!  Also use passport.session() middleware, to support
  // persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());




// routes ==================================================
require('./app/routes/nerdRoute')(app); // configure our routes
require('./app/routes/userRoute')(app); // configure our routes
require('./app/routes/favoriteRoute')(app); // configure our routes 
//core ui route
app.use(function (req, res, next) {
  console.log('Time:',Date.now());
  next();
});

require('./routes')(app); // configure our routes


var initPassport = require('./config/passport')(passport);

/// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function (err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});

// start app ===============================================
// startup our app at http://localhost:8080
var server = http.createServer(app, function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Connecting...\n');
});
server.listen(app.get('port'), function(){
	console.log('Magic happens on port '  + app.get('port'));
});	
// expose app     
exports = module.exports = app;
