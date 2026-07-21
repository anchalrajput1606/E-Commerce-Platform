const Order = require("../models/Order");
const Cart = require("../models/Cart");

const placeOrder = async (req, res) => {
  try {

    const cart = await Cart.find({
      user: req.user._id,
    }).populate("product");

    if (cart.length === 0) {
      return res.status(400).json({
        message: "Cart is empty",
      });
    }

    let total = 0;

    const products = cart.map(item => {

      total += item.product.price * item.quantity;

      return {
        product: item.product._id,
        quantity: item.quantity,
      };

    });

    const order = await Order.create({
      user: req.user._id,
      products,
      totalAmount: total,
    });

    await Cart.deleteMany({
      user: req.user._id,
    });

    return res.status(201).json({
      message: "Order Placed Successfully",
      order,
    });

  } catch (error) {

    return res.status(500).json({
      message: error.message,
    });

  }
};

//get my order

const getMyOrders = async (req, res) => {

  try {

    const orders = await Order.find({
      user: req.user._id,
    }).populate("products.product");

    return res.status(200).json(orders);

  } catch (error) {

    return res.status(500).json({
      message: error.message,
    });

  }

};

module.exports = {
  placeOrder,
  getMyOrders,
};