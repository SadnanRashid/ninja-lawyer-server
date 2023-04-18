const express = require("express");
const router = express.Router();
const {
  PostOrder,
  GetOrders,
} = require("../../Controllers/Orders/orders-controller");

const {
  GetSpecificOffer,
  GetOffer,
  PostOffer,
} = require("../../Controllers/Offers/offers-controller");

// Order routes
router.post("/add/:id", PostOrder);
router.get("/get/:id", GetOrders);

// return router
module.exports = router;
