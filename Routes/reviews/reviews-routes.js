const express = require("express");
const router = express.Router();
const {
  PostReview,
  GetReviews,
  FetchUsers,
} = require("../../Controllers/Lawyer_Reviews/lawyer-reviews-controller");

router.get("/test", () => {
  console.log("Working test");
});
// Post new review data to database
router.post("/add/:id", PostReview);
// Get all reviews data to database
router.get("/get", GetReviews);
// Get user details based on uids
router.get("/users/get", FetchUsers);

// return router
module.exports = router;
