const express = require("express");
const router = express.Router();
const { PostPayment } = require("../../Controllers/Payment/payment-controller");

// Order routes
router.post("/add", PostPayment);

// export router
module.exports = router;
