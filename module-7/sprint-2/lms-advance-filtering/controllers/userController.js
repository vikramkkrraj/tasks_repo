const User = require('../models/User');

exports.searchUsers = async (req, res, next) => {
  try {
    const { role, platform, keyword } = req.query;
    const filter = {};

    if (role) filter.role = role;
    if (platform) filter['profile.socialLinks.platform'] = platform;
    if (keyword) filter['profile.bio'] = { $regex: keyword, $options: 'i' };

    const users = await User.find(filter);
    res.json(users);
  } catch (err) {
    next(err);
  }
};
