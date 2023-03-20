const express = require("express");
const router = express.Router();
const {
  PostReview,
  GetReviews,
} = require("../../Controllers/Lawyer_Reviews/lawyer-reviews-controller");

router.get("/test", () => {
  console.log("Working test");
});
// Post new review data to database
router.post("/add/:id", PostReview);
// Get all reviews data to database
router.get("/get/:id", GetReviews);

// return router
module.exports = router;
