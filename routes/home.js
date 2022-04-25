const express = require('express');
const router = express.Router();

const restaurant_controller = require('../controllers/restaurant');

// Get all restaurants
router.get('/', restaurant_controller.index);

module.exports = router;