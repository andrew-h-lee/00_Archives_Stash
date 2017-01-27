// Import Mongoose & Password Encrypt
var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// Define Schema for User Model
var userSchema = mongoose.Schema({
  // Using local for Local Strategy Passport
  local: {
    name: String,
    email: String,
    password: String,
  }
});

// Encrypt Password
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Verify if Password is Valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

// Create Model for Users & Expose it to App
module.exports = mongoose.model('User', userSchema);
