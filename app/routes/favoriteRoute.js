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

    //  app.use(function(req, res, next) {
    //     // use mongoose to get all nerds in the database
    //     next();
    // });

    //Try to delete a user's fav
    app.delete('/api/favorites/:objId', function (req, res){
       console.log(req.params);
        var id = req.params.objId;
        console.log("hahhhaaha"+req.params.objId);
        FavRecipe.findById(id)
        .exec(function(err, favorite){
          if(err || !favorite){
              console.log(err +"Error finding matching fav recipe");
              res.send({});
          }else{
             favorite.remove(function (err) {
              if(err){
                console("found but cannot delete");
                 res.send(err);
              }else{
                  res.send();
              }
          });
       }
     });
    });

   //creates a new post
    app.post('/api/post', function(req, res){
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
                res.json({success:"success"});
        });        
    });
};
