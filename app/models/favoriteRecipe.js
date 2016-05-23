// app/models/recipe.js
// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RecipeSchema = new Schema( {
      	recipeId: Number,
      	imageUrl: String,
        name: String
	},
      { collection: 'favorites' }
);
var FavRecipe = mongoose.model('FavRecipe', RecipeSchema);

module.exports = FavRecipe;

console.log('favorite model has been created');
