const express = require("express");
const router = express.Router();
const { PostOrder } = require("../../Controllers/Orders/orders-controller");

//
// Order routes
router.post("/add/:id", PostOrder);

// return router
module.exports = router;
