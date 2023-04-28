// const { QueryAddUser } = require("../../Models/User/user-initial");
const { currentTime } = require("../../Services/timestamp");
const {
  QueryGetReviews,
  QueryAddReview,
  QueryFetchUsers,
  QueryRatingReviews,
  QueryGetAllReviews,
  QueryAddReviewReply,
} = require("../../Models/Reviews/review-queries");
const { filterReviewOnTime } = require("../../Services/Reviews/reviews-filter");

// Post a reply on review
const PostReply = async (req, res) => {
  const { reply, lawyerID, _id } = req.body;

  if (!reply || !lawyerID || !_id) {
    res.status(500).json({ message: "input error" });
  }
  const result = await QueryAddReviewReply(
    reply,
    lawyerID,
    _id,
    "lawyer_reviews"
  );
  res.send(result);
};

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

// Get all reviews:
const GetAllReviews = async (req, res) => {
  try {
    const lawyerUID = req.params.id;
    const reviews = await QueryGetAllReviews(lawyerUID, "lawyer_reviews");
    res.json(reviews);
  } catch (error) {
    res.send(error);
  }
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
  if (!reviewsRef) {
    return res.status(404).send({ message: "data not found" });
  }
  const returnArray = filterReviewOnTime(reviewsRef);
  return res.json(returnArray);
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
  const returnArray = filterReviewOnTime(reviewsRef);
  return res.json(returnArray);
};

// Get all user detials
const FetchUsers = async (req, res) => {
  const query = req.query.ids;
  const uids = query.split(",");
  const result = await QueryFetchUsers(uids);
  res.json(result);
};

module.exports = {
  PostReview,
  GetReviews,
  FetchUsers,
  GetReviewsOnRating,
  GetAllReviews,
  PostReply,
};
