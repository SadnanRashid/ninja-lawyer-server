const { QueryAddUser } = require("../../Models/User/user-initial");
const { currentTime } = require("../../Services/timestamp");
const {
  QueryGetReviews,
  QueryAddReview,
} = require("../../Models/Reviews/review-queries");

const PostReview = async (req, res) => {
  const lawyerID = req.params.id;
  const data = req.body;
  console.log("data", data);
  const timeStamp = currentTime();
  //add time to post data
  data.timestamp = timeStamp;
  //Get results from database
  const postResult = await QueryAddReview(lawyerID, data, "lawyer_reviews");
  return res.json(postResult);
};

// Get user details function
const GetReviews = async (req, res) => {
  // get from database
  const reviewsRef = await QueryGetReviews(req.params.id, "lawyer_reviews");
  console.log(reviewsRef);
  if (!reviewsRef) {
    return res.status(404).send({ message: "data not found" });
  }
  return res.json(reviewsRef);
};

module.exports = { PostReview, GetReviews };
