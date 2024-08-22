const express = require('express');
const { addToCart, getCart } = require('../controllers/cartController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .post(protect, addToCart)
  .get(protect, getCart);

module.exports = router;
