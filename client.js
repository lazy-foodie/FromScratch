// server.js

// modules =================================================
var express        = require('express');
var morgan         = require('morgan');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var fs = require('fs');
var url = require('url');
var http = require('http');

// set our port
var port = process.env.PORT || 3000; 


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

// set the static files location /public/img will be /img for users
app.use(express.static(__dirname + '/public')); 
// app.use('/app', express.static(__dirname + '/app'));
// app.use('/app/models/', express.static(__dirname + '/app/models'));

// // main route ==================================================
require('./routes')(app); // configure our routes

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

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

// // start app ===============================================
// // startup our app at http://localhost:3000
app.listen(port);               

// shoutout to the user                     
console.log('Magic happens on port ' + port);

// expose app           
exports = module.exports = app;                         
