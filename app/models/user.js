// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema( {
            firstName: String,
            lastName: String,
            email: String,
            developer: Boolean,
            favorites: [ {  
                  recipeId : Number,
                  imageUrl: String,
                  name: String,
            } ]
            },
      { collection: 'users' }
);
var User = mongoose.model('User', UserSchema);

module.exports = User;

console.log('user model has been created');