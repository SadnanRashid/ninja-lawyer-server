const express = require("express");
const router = express.Router();
const {
  GetSpecificOffer,
  GetOffer,
  PostOffer,
  ChangeStatus,
  GetUserOffers,
} = require("../../Controllers/Offers/offers-controller");

//Offer routes

// Order routes
router.post("/add/:id", PostOffer);
router.get("/get/specific", GetSpecificOffer);
router.get("/get/:id", GetOffer);
router.get("/get/:id", GetUserOffers);
router.put("/status/change", ChangeStatus);

// return router
module.exports = router;
