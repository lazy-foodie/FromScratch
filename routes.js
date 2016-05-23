// app/routes.js

// grab the nerd model we just created
// var Nerd = require('./models/nerd.server.model');

    module.exports = function(app) {

        // frontend routes =========================================================
        // route to handle all angular requests
        app.get('/*', function(req, res) {
            res.sendfile('./public/index.html'); // load our public/index.html file
        });
 };