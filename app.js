const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

// ENABLING CORS
app.use(cors());

// IMPORTING CONTROLLERS
const Product = require("./controllers/Product.controller");
const Cart = require("./controllers/Cart.controller");

// REGISTERED BODY PARSER
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api/products", Product);
app.use("/api/cart", Cart);

module.exports = app;
