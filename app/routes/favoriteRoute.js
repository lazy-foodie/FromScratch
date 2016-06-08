// app/routes.js
var path = require('path'),
mongoose = require('mongoose')
var express =require("express");
var mongo = require('mongodb');

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

    // Get fav by id
    app.get('/api/:userId/favorites', function(req, res) {
        // use mongoose to get all nerds in the database
        FavRecipe.find(function(err, favorites) {
            // if there is an error retrieving, send the error. 
            // nothing after res.send(err) will execute
            if (err) 
              res.send(err);
            res.json(favorites); // return all nerds in JSON format
        });
    });

    //Try to delete a user's fav
    app.delete('/api/favorites/:userId', function (req, res, next){
        return FavRecipe.findOne({userId: req.params.userId}, function (err, favorite) {
        return favorite.remove(function (err) {
        if (!err) {
          console.log("removed");
          res.json(favorite);
        } else {
          console.log(err);
          next(err);
        }
      });
     });
    });

   //creates a new post
    app.post('/api/post', function(req, res,next){
     // FavRecipe.save({recipeId:'aaa',imageUrl:'aaa',name: 'aaa', userId: 'bich@gmail.com'});

      console.log('in post');
       console.log(req.body);
       var recipe = new FavRecipe();
        recipe.recipeId=req.body.recipeId;
        recipe.imageUrl=req.body.imageUrl;
        recipe.name = req.body.name;
        recipe.userId = req.body.userId;
        recipe.save(function(err) {
            if (err)
                res.send(err);
              else 
                res.send({"sucess":"sucess"});
          //  res.json({ message: 'recipe created!' });
        });
        
    });
    /*****************************************/
    /* Helper private methods */
    /*****************************************/
};
