const express = require('express');
const { searchUsers } = require('../controllers/userController');
const router = express.Router();

router.get('/', searchUsers);

module.exports = router;
