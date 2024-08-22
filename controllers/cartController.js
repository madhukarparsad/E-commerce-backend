const Cart = require('../models/cartModel');

const addToCart = async (req, res) => {
  const { productId, quantity } = req.body;
  const userId = req.user._id;

  let cart = await Cart.findOne({ user: userId });

  if (cart) {
    // Cart exists for user
    const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

    if (itemIndex > -1) {
      let productItem = cart.items[itemIndex];
      productItem.quantity += quantity;
    } else {
      cart.items.push({ product: productId, quantity });
    }
    cart = await cart.save();
    return res.status(201).json(cart);
  } else {
    // No cart for user, create a new one
    const newCart = await Cart.create({
      user: userId,
      items: [{ product: productId, quantity }]
    });
    return res.status(201).json(newCart);
  }
};

const getCart = async (req, res) => {
  const cart = await Cart.findOne({ user: req.user._id }).populate('items.product');
  res.json(cart);
};

module.exports = { addToCart, getCart };
