const User = require('../models/User');

exports.addUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

exports.addProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.profiles.push(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

exports.getUsers = async (req, res, next) => {
  try {
    const profile = req.query.profile;
    let users = await User.find();

    if (profile) {
      users = users.filter(user =>
        user.profiles.some(p => p.profileName === profile)
      );
    }

    res.json(users);
  } catch (err) {
    next(err);
  }
};

exports.searchUser = async (req, res, next) => {
  try {
    const { name, profile } = req.query;
    const user = await User.findOne({ name });

    if (!user) return res.status(404).json({ message: 'User not found' });

    const matchedProfile = user.profiles.find(p => p.profileName === profile);
    if (matchedProfile) {
      res.json(matchedProfile);
    } else {
      res.json({ message: 'User found, but profile not found', user });
    }
  } catch (err) {
    next(err);
  }
};

exports.updateProfile = async (req, res, next) => {
  try {
    const { userId, profileName } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    const profile = user.profiles.find(p => p.profileName === profileName);
    if (!profile) return res.status(404).json({ message: 'Profile not found' });

    profile.url = req.body.url;
    await user.save();
    res.json(profile);
  } catch (err) {
    next(err);
  }
};

exports.deleteProfile = async (req, res, next) => {
  try {
    const { userId, profileName } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.profiles = user.profiles.filter(p => p.profileName !== profileName);
    await user.save();
    res.json({ message: 'Profile deleted' });
  } catch (err) {
    next(err);
  }
};
