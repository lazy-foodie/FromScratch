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
                                       if (err) {
                                                    res.send(err);
                                       }
                                       res.json(users); // return all nerds in JSON format
                          });
             });

             function retrieveUserDetails(res, query) {
                     var query = Users.findOne(query);
                     query.exec(function (err, itemArray) {
                     res.json(itemArray);    
             });
            }

             app.get('/api/users/:userId', function(req, res) {
              console.log(req);
                            var id = req.params.userId;
                            console.log('Query single user with id: ' + id);
                            // retrieveUserDetails(res, {_id: id});
                        
  // use mongoose to get all nerds in the database
                          User.findOne(id, function(err, user) {
                                       // if there is an error retrieving, send the error. 
                                       // nothing after res.send(err) will execute
                                       if (err) {
                                                    res.send(err);
                                       }
                                       res.json(user); // return all nerds in JSON format
                          });
             });
};
