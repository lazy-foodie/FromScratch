// app/routes.js
var path = require('path'),
    mongoose = require('mongoose');
// grab the favorite model we just created
 var   Nerd = require(path.resolve('./app/models/nerd'));
 var   passport = require('passport');

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/nerds', function(req, res) {
            // use mongoose to get all nerds in the database
            Nerd.find(function(err, nerds) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(nerds); // return all nerds in JSON format
            });
        });

        app.get('/logout', function(req, res){
            req.logout();
            res.send(200);
        });

        app.get('/loggedin', function(req, res){
          res.send(req.isAuthenticated() ? req.user : '0');
        });

       app.get('/auth/facebook', function(req, res, next) {
    console.log('Calling Facebook Authenticate');
    passport.authenticate('facebook', {scope:['email', 'public_profile']})(req, res, next);
});

    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        failureRedirect: '/login',
        successRedirect: '/',
        scope:['email', 'public_profile']
    }));

        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests

    };
