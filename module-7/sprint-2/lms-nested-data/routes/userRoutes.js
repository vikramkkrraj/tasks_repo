const express = require('express');
const { createUser, getUsersByRole } = require('../controllers/userController');
const router = express.Router();

router.post('/', createUser);
router.get('/', getUsersByRole);

module.exports = router;
