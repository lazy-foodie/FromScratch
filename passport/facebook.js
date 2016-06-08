
//config/passport.js
var FacebookStrategy = require('passport-facebook').Strategy;

// load up the user model
var User = require('../app/models/user');
// var  express = require('express');
// load the auth variables
var configAuth = require('../config/auth');

module.exports = function(passport) {
    // var router = express.Router();

    // =========================================================================
    // FACEBOOK ================================================================
    // =========================================================================
    passport.use(new FacebookStrategy({

        // pull in our app id and secret from our auth.js file
        clientID        : configAuth.facebookAuth.clientID,
        clientSecret    : configAuth.facebookAuth.clientSecret,
        callbackURL     : configAuth.facebookAuth.callbackURL,
        profileFields   : configAuth.facebookAuth.profileFields
    },
      
    // facebook will send back the token and profile
    function(token, refreshToken, profile, done) {
        
        // asynchronous
        process.nextTick(function() {

            // find the user in the database based on their facebook id
            User.findOne({ 'facebook.id' : profile.id }, function(err, user) {

                // if there is an error, stop everything and return that
                // ie an error connecting to the database
                if (err)
                    return done(err);

                // if the user is found, then log them in
                if (user) {
                    return done(null, user); // user found, return that user
                } else {
                    // if there is no user found with that facebook id, create them
                    var newUser            = new User();

                    // set all of the facebook information in our user model
                    newUser.firstName = profile.name.givenName;
                    newUser.lastName = profile.name.familyName;
                    newUser.email = profile.emails[0].value;
                    newUser.facebook.id    = profile.id; // set the users facebook id                   
                    newUser.facebook.token = token; // we will save the token that facebook provides to the user                    
                    newUser.facebook.name  = profile.name.givenName + ' ' + profile.name.familyName; // look at the passport user profile to see how names are returned
                    newUser.facebook.email = profile.emails[0].value; // facebook can return multiple emails so we'll take the first

                    // save our user to the database
                    newUser.save(function(err) {
                        if (err)
                            throw err;

                        // if successful, return the new user
                        return done(null, newUser);
                    });
                }

            });
        });


// router.post('/auth/facebook',
//   passport.authenticate('facebook', { scope: ['public_profile', 'email'] }),
//   function(req, res){
//     // The request will be redirected to Facebook for authentication, so
//     // this function will not be called.
//   });


//     // GET /auth/facebook/callback 
//     //   Use passport.authenticate() as route middleware to authenticate the 
//     //   request.  If authentication fails, the user will be redirected back to the 
//     //   login page.  Otherwise, the primary route function function will be called, 
//     //   which, in this example, will redirect the user to the home page. 
//     router.get('/auth/facebook/callback',
//       passport.authenticate('facebook', { failureRedirect: '/login' }),
//       function () {
//         return res.status(200).json({
//             status: 'Registration successful!'
//         });
//     });

//     app.get('/api/logout', function(req, res) {
//         req.logout();
//         res.status(200).json({
//             status: 'Bye!'
//         });
//     });

//     router.use(function(err, req, res, next) {
//   console.error(err.stack);
//   res.send(500, { message: err.message });
    }
    ));
}

console.log('passport-facebook has been created');