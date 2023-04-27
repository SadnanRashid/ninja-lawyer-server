const express = require("express");
const router = express.Router();
const {
  PostPayment,
  PaymentVerification,
} = require("../../Controllers/Payment/payment-controller");

// Order routes
router.post("/add", PostPayment);
router.post("/verification", PaymentVerification);

// export router
module.exports = router;
