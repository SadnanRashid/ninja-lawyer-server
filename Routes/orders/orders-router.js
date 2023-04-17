const express = require("express");
const router = express.Router();
const {
  PostOrder,
  GetOrders,
} = require("../../Controllers/Orders/orders-controller");

//
// Order routes
router.post("/add/:id", PostOrder);
router.get("/get/:id", GetOrders);

// return router
module.exports = router;
