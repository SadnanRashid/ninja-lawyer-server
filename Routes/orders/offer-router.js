const express = require("express");
const router = express.Router();
const {
  GetSpecificOffer,
  GetOffer,
  PostOffer,
  ChangeStatus,
  GetUserOffers,
  GetOfferWithID,
} = require("../../Controllers/Offers/offers-controller");

//Offer routes

// Order routes
router.post("/add/:id", PostOffer);
router.get("/get/specific", GetSpecificOffer);
router.get("/get/:id", GetOffer);
router.get("/get/unique/:id", GetOfferWithID);
router.get("/user/get/:id", GetUserOffers);
router.put("/status/change", ChangeStatus);

// return router
module.exports = router;
