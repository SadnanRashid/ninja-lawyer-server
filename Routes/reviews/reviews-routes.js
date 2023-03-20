const express = require("express");
const router = express.Router();
const {
  PostReview,
  GetReviews,
} = require("../../Controllers/Lawyer_Reviews/lawyer-reviews-controller");

router.get("/test", () => {
  console.log("Working test");
});
// Post new use data to database
router.post("/add", PostReview);

// return router
module.exports = router;
