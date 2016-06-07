// app/models/user.js
// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema( {
      firstName: String,
      lastName: String,
      email: String,
      password: String,
      developer: Boolean,
      favorites: [ {  
            recipeId : Number,
            imageUrl: String,
            name: String,
      }],
      facebook: {
            id: String,
            token: String,
            name: String,
            email: String
      }
      { collection: 'users' }
);
var User = mongoose.model('User', UserSchema);

module.exports = User;

console.log('user model has been created');