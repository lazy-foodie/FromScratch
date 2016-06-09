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

//app.get('/account', ensureAuthenticated, function(req, res){
app.get('/user/profile', function(req, res){
    if (req.isAuthenticated()) {
      console.log('=============>user authenticated');
      res.redirect('/profile', {});
      var u = req.user;
      Object.keys(u).forEach(function (key) {
        console.log("Key:" + key);
        console.log("Value:" + u[key]);
      });
  }
  else {
    console.log('------------->user not authenticated');
    res.redirect('/login', {});      
  }
});

        app.get('/logout', function(req, res, next){
                        console.log('Logging out');
            req.logout();
            res.redirect('/');
        });

        app.get('/status', function(req, res){
          res.send(req.isAuthenticated() ? req.user : '0');
        });

        app.get('/auth/facebook', function(req, res, next) {
            console.log('Calling Facebook Authenticate');
            passport.authenticate('facebook', {scope:['email', 'public_profile']})(req, res, next);
        });

        app.get('/auth/facebook/callback',
          passport.authenticate('facebook', { failureRedirect: '/login', scope:['email', 'public_profile'] }),
          function(req, res) {
            res.redirect('/');
          });
        // route to handle creating goes here (app.post)
        // route to handle delete goes here (app.delete)

        // frontend routes =========================================================
        // route to handle all angular requests

    };
