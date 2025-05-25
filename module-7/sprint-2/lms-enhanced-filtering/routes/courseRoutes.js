const express = require('express');
const { advancedCourseSearch } = require('../controllers/courseController');
const router = express.Router();

router.get('/', advancedCourseSearch);

module.exports = router;
