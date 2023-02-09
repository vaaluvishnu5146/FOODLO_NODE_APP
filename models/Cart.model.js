const mongoose = require("mongoose");

// CREATE A SCHEMA
// CONVERT SCHEMA TO MODEL
// USE THE MODEL TO GET/POST/PUT/DELETE DATA
const CartSchema = mongoose.Schema({
  userId: {
    type: String,
    required: false,
  },
  products: {
    type: Array,
    ref: "Product",
  },
  cartSubTotal: {
    type: String,
    required: true,
  },
  cartTotal: {
    type: String,
    required: true,
  },
  gst: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Cart", CartSchema);
