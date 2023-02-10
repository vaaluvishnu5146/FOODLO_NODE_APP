const calculatedPriceAfterDiscount = (
  price = 0,
  discount = 0,
  discountType = "%"
) => {
  if (discountType == "%") {
    return price - (price / 100) * discount;
  } else {
    return price - discount;
  }
};

module.exports = {
  calculatedPriceAfterDiscount: calculatedPriceAfterDiscount,
};
