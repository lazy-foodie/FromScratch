// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');
var	Schema = mongoose.Schema;

// define our user model
var UserSchema = new Schema(
	{
		created: {
			type: Date,
			default: Date.now
		},
	    firstName: {
	    	type: String,
	    	default: '',
	    	required: 'first name cannot be blank'
	    },
	    lastName: {
	    	type: String,
	    	default: '',
	    	required: 'last name cannot be blank'
	    },   
	    email: String,
	    developer: {
	    	type: Boolean,
	    	default: false,
	    },
	    favorites: [{
	        recipeId: String,
	        imageUrl: String,
	        name: String
	    }]
	},
   { collection: 'users' }
);
User = mongoose.model('User', UserSchema);
console.log('user model have been created');

module.exports = ('User', UserSchema);