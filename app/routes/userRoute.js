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


    /*****************************************/
    /* Helper private methods */
    /*****************************************/
};

console.log('user route done');