const { Router } = require("express");
const {
  createOrder,
  addProductToOrder,
} = require("../controllers/orders.controllers");

const router = Router();

console.log(addProductToOrder);

router.post("/orders", createOrder);
router.post("/orders/add-product", addProductToOrder);

module.exports = router;
