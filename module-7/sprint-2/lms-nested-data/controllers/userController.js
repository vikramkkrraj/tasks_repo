const User = require('../models/User');

exports.createUser = async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

exports.getUsersByRole = async (req, res, next) => {
  try {
    const role = req.query.role;
    const users = await User.find(role ? { role } : {});
    res.json(users);
  } catch (err) {
    next(err);
  }
};
