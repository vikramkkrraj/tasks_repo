const Course = require('../models/Course');

exports.createCourse = async (req, res, next) => {
  try {
    const course = await Course.create(req.body);
    res.status(201).json(course);
  } catch (err) {
    next(err);
  }
};

exports.getCoursesByFilter = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.title) filter.title = req.query.title;
    if (req.query.instructor) filter.instructor = req.query.instructor;

    const courses = await Course.find(filter);
    res.json(courses);
  } catch (err) {
    next(err);
  }
};
