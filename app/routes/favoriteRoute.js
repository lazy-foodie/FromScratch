// app/routes.js
var path = require('path'),
mongoose = require('mongoose')
// grab the favorite model we just created
FavRecipe = require(path.resolve('./app/models/favoriteRecipe'));

module.exports = function(app) {

    /*****************************************/
    /* Favorite API routes */
    /*****************************************/

    // Get all favorite recipes 
    app.get('/api/favorites', function(req, res) {
        // use mongoose to get all nerds in the database
        FavRecipe.find(function(err, favorites) {
            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err) 
              res.send(err);
            res.json(favorites); // return all nerds in JSON format
        });
    });
    /*****************************************/
    /* Helper private methods */
    /*****************************************/
};
