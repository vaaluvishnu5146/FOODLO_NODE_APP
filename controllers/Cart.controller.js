const router = require("express").Router();
const { response } = require("../app");
const CartSchema = require("../models/Cart.model");

////////////////////////////////////////////////////////
///// GET ALL CARTS - GET
/////////////////////////////////////////////////////////

router.get("/", (req, res, next) => {
  CartSchema.find()
    .then((response) => {
      console.log(response);
      if (response.length > 0) {
        res.status(200).json({
          message: "Cart fetched successfully",
          data: response,
        });
      } else {
        res.status(200).json({
          message: "Cart is empty",
          data: response,
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: "Something failed",
        error: err,
      });
    });
});

////////////////////////////////////////////////////////
///// GET A CART WITH SPECIFIC ID - GET
/////////////////////////////////////////////////////////

router.get("/:id", (req, res, next) => {
  const { id = "" } = req.params;
  CartSchema.findById(id)
    .then((response) => {
      if (response._id) {
        res.status(200).json({
          message: "Cart fetched successfully",
          data: response,
        });
      } else {
        res.status(200).json({
          message: "Cart is empty",
          data: response,
        });
      }
    })
    .catch((err) => {
      res.status(400).json({
        message: "Something failed",
        error: err,
      });
    });
});

////////////////////////////////////////////////////////
///// CREATE A CART FOR USER - POST
/////////////////////////////////////////////////////////

router.post("/", (req, res, next) => {
  const {
    userId = "",
    products = [],
    cartSubTotal = 0,
    cartTotal = 0,
    gst = 10,
  } = req.body;
  const Cart = new CartSchema({
    userId: userId,
    products: products,
    cartSubTotal: cartSubTotal,
    cartTotal: cartTotal,
    gst: gst,
  });
  Cart.save()
    .then((response) =>
      res.status(200).json({
        message: "Cart updated successfully",
        data: response,
      })
    )
    .catch((err) =>
      res.status(400).json({
        message: "Cart updation failed",
        error: err,
      })
    );
});

////////////////////////////////////////////////////////
///// UPDATE A CART FOR USER - POST
/////////////////////////////////////////////////////////

router.put("/:id", (req, res, next) => {
  const { id = "" } = req.params;
  CartSchema.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then((response) => {
      if (response._id) {
        res.status(200).json({
          message: "Cart updated successfully",
          data: response,
        });
      } else {
        res.status(200).json({
          message: "Something went wrong",
          data: response,
        });
      }
    })
    .catch((err) =>
      res.status(400).json({
        message: "Cart updation failed",
        error: err,
      })
    );
});

module.exports = router;
