const Cart = require("../models/Cart");
const Product = require("../models/Product");

const addToCart = async (req, res) => {
  try {

    const { productId, quantity } = req.body;

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    const cartItem = await Cart.findOne({
      user: req.user._id,
      product: productId,
    });

    if (cartItem) {

      cartItem.quantity += quantity || 1;

      await cartItem.save();

      return res.status(200).json({
        message: "Cart Updated",
        cartItem,
      });

    }

    const cart = await Cart.create({
      user: req.user._id,
      product: productId,
      quantity: quantity || 1,
    });

    return res.status(201).json({
      message: "Product Added To Cart",
      cart,
    });

  } catch (error) {

    return res.status(500).json({
      message: error.message,
    });

  }
};

const getCart = async (req, res) => {
  try {

    const cart = await Cart.find({
      user: req.user._id,
    }).populate("product");

    return res.status(200).json(cart);

  } catch (error) {

    return res.status(500).json({
      message: error.message,
    });

  }
};

const updateCart = async (req, res) => {
  try {

    const cart = await Cart.findById(req.params.id);

    if (!cart) {
      return res.status(404).json({
        message: "Cart item not found",
      });
    }

    cart.quantity = req.body.quantity;

    await cart.save();

    return res.status(200).json({
      message: "Quantity Updated",
      cart,
    });

  } catch (error) {

    return res.status(500).json({
      message: error.message,
    });

  }
};

const removeFromCart = async (req, res) => {
  try {

    await Cart.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      message: "Item Removed",
    });

  } catch (error) {

    return res.status(500).json({
      message: error.message,
    });

  }
};

module.exports = {
  addToCart,
  getCart,
  updateCart,
  removeFromCart,
};