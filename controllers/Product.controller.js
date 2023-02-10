const router = require("express").Router();
const ProductSchema = require("../models/test");
const { calculatedPriceAfterDiscount } = require("../utils/pricing");

////////////////////////////////////////////////////////
///// GET ALL PRODUCTS - GET
/////////////////////////////////////////////////////////

router.get("/", (req, res, next) => {
  ProductSchema.find()
    .then((response) => {
      if (response.length > 0) {
        res.status(200).json({
          message: "Products fetched successfully",
          data: response,
        });
      } else {
        res.status(200).json({
          message: "Products is empty",
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
///// ADD NEW PRODUCTS - POST
/////////////////////////////////////////////////////////

router.post("/", (req, res, next) => {
  const {
    name = "",
    imageUrl = "",
    description = "",
    price = 0,
    discount = 0,
    discountType = "%",
    foodType = "0",
  } = req.body;

  const Product = new ProductSchema({
    name: name,
    imageUrl: imageUrl,
    description: description,
    price: price,
    discount: discount,
    discountType: discountType,
    foodType: foodType,
  });
  Product.save()
    .then((response) => {
      if (response) {
        res.status(200).json({
          message: "Successfull",
          data: response,
        });
      }
    })
    .catch((err) =>
      res.status(400).json({
        success: false,
        message: err.message,
        error: err,
      })
    );
});

////////////////////////////////////////////////////////
///// GET PRODUCT BY ID - GET
/////////////////////////////////////////////////////////

router.get("/:id", (req, res, next) => {
  const { id = "" } = req.params;
  ProductSchema.findById(id)
    .then((response) => {
      const data = { ...response._doc };
      // try {
      //   calculatedPriceAfterDiscount(
      //     response.price,
      //     response.discount,
      //     response.discountType
      //   );
      // } catch (error) {
      //   console.log(error);
      // }
      data.discountPrice = calculatedPriceAfterDiscount(
        response.price,
        response.discount,
        response.discountType
      );
      if (response._id) {
        res.status(200).json({
          message: "Products fetched successfully",
          data: data,
        });
      } else {
        res.status(200).json({
          message: "Product isn't vailable",
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
///// UPDATE A PRODUCT FOR A STORE - PUT
/////////////////////////////////////////////////////////

router.put("/:id", (req, res, next) => {
  const { id = "" } = req.params;
  ProductSchema.findByIdAndUpdate(id, { ...req.body }, { new: true })
    .then((response) => {
      if (response._id) {
        res.status(200).json({
          message: "Product updated successfully",
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
        message: "Product updation failed",
        error: err,
      })
    );
});

module.exports = router;
