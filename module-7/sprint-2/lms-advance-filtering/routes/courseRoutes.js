const express = require('express');
const { searchCourses } = require('../controllers/courseController');
const router = express.Router();

router.get('/', searchCourses);

module.exports = router;
