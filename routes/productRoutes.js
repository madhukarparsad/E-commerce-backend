const express = require('express');
const { createProduct, getProducts } = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/')
  .get(getProducts)
  .post(protect, createProduct);

module.exports = router;
