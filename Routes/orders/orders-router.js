const express = require("express");
const router = express.Router();
const { PostOrder } = require("../../Controllers/Orders/orders-controller");

//
// Order routes
router.post("/orders/add/:id", PostLawyer);

// return router
module.exports = router;
