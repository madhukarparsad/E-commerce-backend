const express = require('express');
const { createOrder, getOrders } = require('../controllers/orderController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .post(protect, createOrder)
  .get(protect, getOrders);

module.exports = router;
