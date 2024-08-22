const Order = require('../models/orderModel');

const createOrder = async (req, res) => {
  const { items, totalPrice } = req.body;
  const userId = req.user._id;

  const order = new Order({
    user: userId,
    items,
    totalPrice,
    isPaid: false,
  });

  await order.save();
  res.status(201).json(order);
};

const getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id }).populate('items.product');
  res.json(orders);
};

module.exports = { createOrder, getOrders };
