const express = require('express');
const { advancedUserSearch } = require('../controllers/userController');
const router = express.Router();

router.get('/', advancedUserSearch);

module.exports = router;
