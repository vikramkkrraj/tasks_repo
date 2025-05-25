const mongoose = require('mongoose');
const validator = require('validator');

const profileSchema = new mongoose.Schema({
  profileName: {
    type: String,
    required: true,
    enum: ["fb", "twitter", "github", "instagram"]
  },
  url: {
    type: String,
    required: true,
    validate: {
      validator: validator.isURL,
      message: 'Invalid URL'
    }
  }
});

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'Invalid email'
    }
  },
  password: {
    type: String,
    required: true,
    minlength: [6, 'Password must be at least 6 characters']
  },
  profiles: [profileSchema]
});

module.exports = mongoose.model('User', userSchema);
