const Course = require('../models/Course');

exports.advancedCourseSearch = async (req, res, next) => {
  try {
    const {
      minDuration, maxCapacity, day, keyword, page = 1,
      limit = 10, sort = 'asc'
    } = req.query;

    const filter = {};
    if (minDuration && isNaN(minDuration)) throw new Error('minDuration must be a number');
    if (maxCapacity && isNaN(maxCapacity)) throw new Error('maxCapacity must be a number');

    if (minDuration) filter.duration = { $gte: Number(minDuration) };
    if (maxCapacity) filter.maxCapacity = { $gt: Number(maxCapacity) };
    if (day) filter['schedule.days'] = { $in: [day] };
    if (keyword) filter.title = { $regex: keyword, $options: 'i' };

    const skip = (page - 1) * limit;
    const total = await Course.countDocuments(filter);
    const courses = await Course.find(filter)
      .sort({ title: sort === 'desc' ? -1 : 1 })
      .skip(skip)
      .limit(Number(limit));

    if (courses.length === 0) return res.status(404).json({ message: 'No courses found' });

    res.json({
      total,
      pages: Math.ceil(total / limit),
      page: Number(page),
      results: courses
    });
  } catch (err) {
    next(err);
  }
};
