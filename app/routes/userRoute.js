// app/routes.js
var path = require('path'),
mongoose = require('mongoose'),
// passport = require('passport');
// grab the user model we just created
User = require(path.resolve('./app/models/user'));
var ObjectId = require('mongodb').ObjectID;
module.exports = function(app, passport) {
    
    /*****************************************/
    /* User API routes */
    /*****************************************/

    // Get all users
    app.get('/api/users', function(req, res) {
        // use mongoose to get all nerds in the database
        User.find(function(err, users) {
            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err) 
                res.send(err);
           return res.json(users); // return all users in JSON format
        });
    });

    // Get user by Id
    app.get('/api/users/:userId', function(req, res) {
        var id = req.params.userId;
        User.findOne({ _id : new ObjectId(id) }, function(err, user) {
           // if there is an error retrieving, send the error. 
           // nothing after res.send(err) will execute
            if (err) 
              handleError(res, err.message, "Failed to get user");
            else res.status(200).json(user); // return a user obj in JSON format
        });
      });


    /*****************************************/
    /* FACEBOOK */
    /*****************************************/
    // app.get('/auth/facebook', function(req, res, next){

    //     passport.authenticate('facebook', function(err, user, info){
    //         if(err){ return next(err); }

    //         if(user){
    //           return res.json(user);
    //         } else {
    //           return res.status(401).json(info);
    //         }
    //       })(req, res, next);
    // });

    // // GET /auth/facebook/callback 
    // //   Use passport.authenticate() as route middleware to authenticate the 
    // //   request.  If authentication fails, the user will be redirected back to the 
    // //   login page.  Otherwise, the primary route function function will be called, 
    // //   which, in this example, will redirect the user to the home page. 
    // app.get('/auth/facebook/callback', function(req, res, next){

    //     passport.authenticate('facebook', function(err, user, info){
    //         if(err){ return next(err); }

    //         if(user){
    //           return res.json(user);
    //         } else {
    //           return res.status(401).json(info);
    //         }
    //       })(req, res, next);
    // });
// signup
    app.post("/register", function(req, res) {
      db.User.findOne({
        email: req.body.email
      }, function(err, user) {
        if (user) {
          res.json(null);
          return;
        } else {
          var newUser = new db.User();
          newUser.email = req.body.email.toLowerCase();
          newUser.password = req.body.password;
          newUser.save(function(err, user) {
            req.login(user, function(err) {
              if (err) {
                return next(err);
              }
              res.json(user);
            });
          });
        }
      });
    }); 

    /*****************************************/
    /* Helper private methods */
    /*****************************************/
  function handleError(res, reason, message, code) {
      console.log("ERROR: " + reason);
      res.status(code || 500).json({"error": message});
  }
};
