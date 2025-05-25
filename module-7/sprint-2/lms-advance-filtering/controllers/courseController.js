const Course = require('../models/Course');

exports.searchCourses = async (req, res, next) => {
  try {
    const {
      title, minDuration, maxDuration, minCapacity, day,
      sort = 'asc', page = 1, limit = 10, keyword
    } = req.query;

    const filter = {};
    if (title) filter.title = title;
    if (minDuration || maxDuration)
      filter.duration = {
        ...(minDuration && { $gte: Number(minDuration) }),
        ...(maxDuration && { $lte: Number(maxDuration) })
      };
    if (minCapacity) filter.maxCapacity = { $gte: Number(minCapacity) };
    if (day) filter['schedule.days'] = { $in: [day] };
    if (keyword) filter.title = { $regex: keyword, $options: 'i' };

    const skip = (Number(page) - 1) * Number(limit);
    const total = await Course.countDocuments(filter);
    const courses = await Course.find(filter)
      .sort({ title: sort === 'desc' ? -1 : 1 })
      .skip(skip)
      .limit(Number(limit));

    res.json({
      total,
      page: Number(page),
      limit: Number(limit),
      results: courses
    });
  } catch (err) {
    next(err);
  }
};
