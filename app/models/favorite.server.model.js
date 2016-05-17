// app/models/recipe.js
// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FavoriteSchema = new Schema(
	{
		created: {
			type: Date,
			default: Date.now
		},
	    name: String,
	    description: String,
	    recipeId: {
	    	type: String,
	    	default: '',
	    	required: 'recipe id cannot be blank'
	    },
	    ingredients: [String],
	    rating: Number,
	    sourceUrl: String,
	    imageUrl: String,
	    attributes: [{
	        cuisine: String,
	        holiday: String,
	        course: String
	    }],
	    totalTime: String
	},
   { collection: 'favorites' }
);
Favorite = mongoose.model('Favorite', FavoriteSchema);

console.log('favorite model have been created');

module.exports = ('Favorite', FavoriteSchema);
