// server.js

// modules =================================================
var express = require('express');
var morgan = require('morgan');
var app = express();
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var passport = require('passport');
var fs = require('fs');
var url = require('url');
var http = require('http');
var path = require('path');
var uriUtil = require("mongodb-uri");
var util = require('util');
//authentication
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var crypto = require('crypto');

// ===============================================
// ============= SET-UP PORTS ====================
// ===============================================
var port = process.env.PORT || process.argv[2]|| 8080;
app.set('port', port); 


// get all data/stuff of the body (POST) parameters
app.use(morgan('dev'));

// parse application/json 
app.use(bodyParser.json());

// parse application/vnd.api+json as json
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// read cookies (needed for auth)
app.use(cookieParser());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
app.use('/', express.static(__dirname + '/public'));

// ===============================================
// ========== MONGO CONNECTION SET-UP ============
// ===============================================
// Create the database connection 
var db_options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } }; 

// Build the connection string to MongoDb
var dbUrl = require('./config/db');
var mongooseUri = uriUtil.formatMongoose(dbUrl.url);

var db = mongoose.connection;

// Request connection to mongodDb
mongoose.connect(mongooseUri, db_options);

app.use(
	session({ 
		secret: 'lazyfoodie2016',
        maxAge: new Date(Date.now() + 604800000),
		store: new MongoStore({ 
			mongooseConnection: db,
			collection: 'sessions'
		}), 
		resave: true,
	    saveUninitialized: true
	})
);
app.use(passport.initialize());
app.use(passport.session()); 

// ===============================================
// ========== MONGO CONNECTION EVENTS ============
// ===============================================
// If the connection throws an error
db.on('error', function(err) {
	console.log("ERROR connection to MongoDB server " + err);
});

// If the connection is connected
db.on('connected', function(err) {
	console.log("Connecting to MongoDB server");
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

// ===============================================
// =========== SET UP API ROUTES =================
// ===============================================
require('./app/routes/nerdRoute')(app); 
require('./app/routes/userRoute')(app); 
require('./app/routes/favoriteRoute')(app); 
// ===============================================
// ============SET UP FRONT-END ROUTE ============
// ===============================================
require('./routes')(app); 


// ===============================================
// ============ ERROR HANDLERS ===================
// ===============================================

// catch 404 and forwarding to error handler
app.use(function (req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

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

// ===============================================
// ============ START APP ========================
// ===============================================

/***********************************************/
/******  HTTP on port 8080 ******/
/***********************************************/
var insecureServer = http.createServer(app, function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Connecting...\n');
});

insecureServer.listen(app.get('port'), function(){
	console.log('\nMagic happens on port ' + app.get('port'));
});
// expose app           
exports = module.exports = app;
