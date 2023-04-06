const { QueryAddUser } = require("../../Models/User/user-initial");
const { currentTime } = require("../../Services/timestamp");
const {
  QueryGetReviews,
  QueryAddReview,
  QueryFetchUsers,
  QueryRatingReviews,
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
  const lawyerID = req.query.id;
  const page = req.query.page || 1; // default to first page
  const limit = parseInt(req.query.limit) || 10; // default limit to 10 documents per page
  const skip = (page - 1) * limit;
  // get from database
  const reviewsRef = await QueryGetReviews(
    lawyerID,
    "lawyer_reviews",
    parseInt(limit),
    parseInt(skip)
  );
  console.log(reviewsRef);
  if (!reviewsRef) {
    return res.status(404).send({ message: "data not found" });
  }
  return res.json(reviewsRef);
};

// Get review details based on ratings
const GetReviewsOnRating = async (req, res) => {
  const lawyerID = req.query.id;
  const { ratings, limit, page } = req.query;
  const skip = (page - 1) * limit;
  // get from database
  const reviewsRef = await QueryRatingReviews(
    lawyerID,
    ratings,
    "lawyer_reviews",
    parseInt(limit),
    parseInt(skip)
  );
  if (!reviewsRef) {
    return res.status(404).send({ message: "data not found" });
  }
  return res.json(reviewsRef);
};

// Get all user detials
const FetchUsers = async (req, res) => {
  const query = req.query.ids;
  const uids = query.split(",");
  const result = await QueryFetchUsers(uids);
  res.json(result);
};

module.exports = { PostReview, GetReviews, FetchUsers, GetReviewsOnRating };
