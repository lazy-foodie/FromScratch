// app/routes.js
console.log("inside /models/routes.js")
// grab the nerd model we just created
var Nerd = require('./models/nerd');
var User = require ('./models/user');

module.exports = function(app) {

            // server routes ===========================================================
            // handle things like api calls
            // authentication routes

            // sample api route
            app.get('/api/nerds', function(req, res) {
                          console.log("inside routes.js for /api/nerds");
                         // use mongoose to get all nerds in the database
                         Nerd.find(function(err, nerds) {
                                      // if there is an error retrieving, send the error. 
                                      // nothing after res.send(err) will execute
                                      if (err) {
                                                   res.send(err);
                                      }
                                      console.log("users returned in nerdRoute " + nerds);
                                      res.json(nerds); // return all nerds in JSON format
                         });
            });

            app.get('/api/users', function(req, res) {
                         console.log("inside routes.js for /api/users");
                         // use mongoose to get all nerds in the database
                         User.find(function(err, users) {
                                      // if there is an error retrieving, send the error. 
                                      // nothing after res.send(err) will execute
                                      if (err) {
                                                   res.send(err);
                                      }
                                      console.log("users returned in userRoute " + users);
                                      res.json(users); // return all nerds in JSON format
                         });
            });

            // route to handle creating goes here (app.post)
            // route to handle delete goes here (app.delete)

            // frontend routes =========================================================
            // route to handle all angular requests
            app.get('*', function(req, res) {
                         res.sendfile('./public/index.html'); // load our public/index.html file
            });

};
