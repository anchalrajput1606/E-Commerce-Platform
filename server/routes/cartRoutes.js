const express = require("express");
const router = express.Router();

const {
  addToCart,
  getCart,
  updateCart,
  removeFromCart,
} = require("../controllers/cartController");

const { protect } = require("../middleware/authMiddleware");

// Add to Cart
router.post("/", protect, addToCart);

// View Cart
router.get("/", protect, getCart);

// Update Quantity
router.put("/:id", protect, updateCart);

// Remove Item
router.delete("/:id", protect, removeFromCart);

module.exports = router;