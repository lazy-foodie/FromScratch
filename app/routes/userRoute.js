// app/routes.js
var path = require('path'),
    mongoose = require('mongoose')
// grab the user model we just created
    User = require(path.resolve('./app/models/user'));

    module.exports = function(app) {

        // server routes ===========================================================
        // handle things like api calls
        // authentication routes

        // sample api route
        app.get('/api/users', function(req, res) {
            // use mongoose to get all nerds in the database
            User.find(function(err, users) {

                // if there is an error retrieving, send the error. 
                                // nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(users); // return all nerds in JSON format
            });
        });

    };
