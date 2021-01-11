const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  NLID: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  designation: {
    type: String,
    required: true,
    trim: true
  },
  contact: {
    type: Number,
    required: true,
    trim: true,
    unique: true
  }
});
const User = mongoose.model("User", userSchema); // module.exports = User

module.exports = User;