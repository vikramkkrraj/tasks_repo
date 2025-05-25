const express = require('express');
const { createCourse, getCoursesByFilter } = require('../controllers/courseController');
const router = express.Router();

router.post('/', createCourse);
router.get('/', getCoursesByFilter);

module.exports = router;
