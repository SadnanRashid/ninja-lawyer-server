const express = require("express");
const router = express.Router();
const {
  GetSpecificOffer,
  GetOffer,
  PostOffer,
} = require("../../Controllers/Offers/offers-controller");

//Offer routes

// Order routes
router.post("/add/:id", PostOffer);
router.get("/get/specific", GetSpecificOffer);
router.get("/get/:id", GetOffer);

// return router
module.exports = router;
