// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema( {
            userId: Number,
            firstName: String,
            lastName: String,
            email: String,
            developer: Boolean,
            favorites: [ {  
                  recipeId : Number,
                  url: String,
                  name: String,
            } ]
            },
      { collection: 'users' }
);
User = mongoose.model('User', UserSchema);

console.log('user model has been created');

module.exports = ('User', UserSchema);