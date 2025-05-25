const User = require('../models/User');

exports.advancedUserSearch = async (req, res, next) => {
  try {
    const { role, platform, language, keyword, page = 1, limit = 10 } = req.query;
    const filter = {};

    if (role) filter.role = role;
    if (platform) filter['profile.socialLinks.platform'] = platform;
    if (language) filter['profile.preferences.preferredLanguage'] = language;
    if (keyword) filter['profile.bio'] = { $regex: keyword, $options: 'i' };

    const skip = (page - 1) * limit;
    const total = await User.countDocuments(filter);
    const users = await User.find(filter).skip(skip).limit(Number(limit));

    if (users.length === 0) return res.status(404).json({ message: 'No users found' });

    res.json({
      total,
      pages: Math.ceil(total / limit),
      page: Number(page),
      results: users
    });
  } catch (err) {
    next(err);
  }
};
