const { QueryAddUser } = require("../../Models/User/user-initial");
const { currentTime } = require("../../Services/timestamp");
const { QueryGetReviews } = require("../../Models/Reviews/review-queries");

const PostReview = async (req, res) => {
  const lawyerID = req.params.id;
  const data = req.body;
  console.log("data", data.UID);
  const timeStamp = currentTime();
  //add time to post data
  data.timestamp = timeStamp;
  //Get results from database
  const postResult = await QueryAddUser(lawyerID, data, "users");
  return res.json(postResult);
};

// Get user details function
const GetReviews = async (req, res) => {
  // get from database
  const reviewsRef = await QueryGetReviews(req.params.id, "users");
  console.log(reviewsRef);
  if (!reviewsRef) {
    return res.status(404).send({ message: "data not found" });
  }
  return res.json(reviewsRef);
};

module.exports = { PostReview, GetReviews };
