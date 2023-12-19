const express = require('express');
const router = express.Router();
const { handleRoot, handleNewOrder  } = require('../controllers/OrderController');
const { handelDriverOnline } = require('../controllers/DriverController');




router.get('/', handleRoot);
router.post('/new_order', handleNewOrder);
router.get('/all_driver', handelDriverOnline);
module.exports = router;