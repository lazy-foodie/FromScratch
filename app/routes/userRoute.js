// app/routes.js
var path = require('path'),
mongoose = require('mongoose')
// grab the user model we just created
User = require(path.resolve('./app/models/user'));

module.exports = function(app) {
    
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
           res.json(users); // return all users in JSON format
        });
    });

    // Get user by Id
    app.get('/api/users/:userId', function(req, res) {
        var id = req.params.userId;
        User.findOne(id, function(err, user) {
           // if there is an error retrieving, send the error. 
           // nothing after res.send(err) will execute
            if (err) 
                res.send(err);
            res.json(user); // return a user obj in JSON format
        });
    });

    // app.post('/api/users/register', function(req, res) {
    //     var user = new User({
    //         firstName: req.body.first_name,
    //         lastName: req.body.last_name,
    //         email: req.body.email,
    //         password: req.body.password
    //     });
        
    //     User.register(user),
    //         req.body.password, function(err, account) {
    //         if (err) {
    //             return res.status(500).json({
    //                 err: err
    //             });
    //         }
    //         passport.authenticate('local')(req, res, function () {
    //             return res.status(200).json({
    //                 status: 'Registration successful!'
    //             });
    //         });
    //     });
    // });

    // app.post('/api/users/login', function(req, res, next) {
    //     passport.authenticate('local', function(err, user, info) {
    //         if (err) {
    //             return next(err);
    //         }
    //         if (!user) {
    //             return res.status(401).json({
    //                 err: info
    //             });
    //         }
    //         req.logIn(user, function(err) {
    //             if (err) {
    //                 return res.status(500).json({
    //                     err: 'Could not log in user'
    //                 });
    //             }
    //             res.status(200).json({
    //                 status: 'Login successful!'
    //             });
    //         });
    //     })(req, res, next);
    // });

    // app.get('/api/users/logout', function(req, res) {
    //     req.logout();
    //     res.status(200).json({
    //         status: 'Bye!'
    //     });
    // });

    // app.get('/api/users/status', function(req, res) {
    //     if (!req.isAuthenticated()) {
    //         return res.status(200).json({
    //             status: false
    //         });
    //     } 
    //     res.status(200).json({
    //         status: true
    //     });
    // });


    /*****************************************/
    /* Helper private methods */
    /*****************************************/
};
