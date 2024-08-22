const Product = require('../models/productModel');

const createProduct = async (req, res) => {
  const { name, description, price, image, stock } = req.body;

  const product = new Product({
    name,
    description,
    price,
    image,
    stock,
  });

  await product.save();
  res.status(201).json(product);
};

const getProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

module.exports = { createProduct, getProducts };
