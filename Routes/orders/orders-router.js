const express = require("express");
const router = express.Router();
const {
  PostOrder,
  GetOrders,
  GetUserOrders,
} = require("../../Controllers/Orders/orders-controller");

// Order routes
router.post("/add/:id", PostOrder);
router.get("/get/:id", GetOrders);
router.get("/user/get/:id", GetUserOrders);
// return router
module.exports = router;
