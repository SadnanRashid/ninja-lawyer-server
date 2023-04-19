const express = require("express");
const router = express.Router();
const {
  PostOrder,
  GetOrders,
  GetUserOrders,
  GetOrderWithID,
  ChangeStatus,
} = require("../../Controllers/Orders/orders-controller");

// Order routes
router.post("/add/:id", PostOrder);
router.get("/get/:id", GetOrders);
router.get("/get/unique/:id", GetOrderWithID);
router.get("/user/get/:id", GetUserOrders);
router.put("/status/change", ChangeStatus);
// return router
module.exports = router;
