const mongoose = require("mongoose");

// CREATE A SCHEMA
// CONVERT SCHEMA TO MODEL
// USE THE MODEL TO GET/POST/PUT/DELETE DATA
const TestSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: false,
  },
  discountType: {
    type: String,
    required: false,
  },
  foodType: {
    type: String,
    required: true,
    default: "0",
  },
  isLive: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("product", TestSchema);
