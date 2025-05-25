const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true, enum: ['student', 'instructor', 'admin'] },
  profile: {
    bio: String,
    socialLinks: [{
      platform: String,
      url: String
    }],
    preferences: {
      preferredLanguage: String
    }
  }
});

module.exports = mongoose.model('User', userSchema);
