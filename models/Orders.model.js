const mongoose = require("mongoose");

// CREATE A SCHEMA
// CONVERT SCHEMA TO MODEL
// USE THE MODEL TO GET/POST/PUT/DELETE DATA
const OrderSchema = mongoose.Schema({
  userId: {
    type: Number,
    required: false,
  },
  orderType: {
    type: Number,
    required: true,
  },
  products: {
    type: Array,
    required: true,
  },
  orderValue: {
    type: Number,
    required: true,
  },
  shippingCharges: {
    type: Number,
    required: false,
  },
  couponApplied: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Order", OrderSchema);
