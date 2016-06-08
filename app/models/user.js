// app/models/nerd.js
// grab the mongoose module
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema( {
            firstName: String,
            lastName: String,
            email: String,
            developer: {
                type: Boolean,
                required: true,
                default: false
            },
            facebook: {
				id: String,
				token: String,
				name: String
			}
        },
      { collection: 'users' }
);
var User = mongoose.model('User', UserSchema);

module.exports = User;

console.log('user model has been created');