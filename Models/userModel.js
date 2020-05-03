const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    max: 250,
  },
  email: {
    type: String,
    required: true,
    max: 250,
  },
  password: {
    type: String,
    required: true,
    max: 250,
  },
});

module.exports = mongoose.model('User', UserSchema);
