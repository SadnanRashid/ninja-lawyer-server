const express = require("express");
const router = express.Router();
const {
  PostPayment,
  PaymentVerification,
  GetPayment,
} = require("../../Controllers/Payment/payment-controller");

// Order routes
router.post("/add", PostPayment);
router.post("/verification", PaymentVerification);
router.get("/get", GetPayment);

// export router
module.exports = router;
