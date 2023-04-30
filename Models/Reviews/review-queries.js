const { getCollection } = require("../database");
const {
  filterReviewsRatings,
} = require("../../Services/Reviews/reviews-filter");
const { ObjectId } = require("mongodb");

// Get all reviews of a lawyer
const QueryGetAllReviews = async (lawyerUID, collection) => {
  try {
    const query = { lawyerUID: lawyerUID };
    const result = getCollection(collection).findOne(query);
    return result;
  } catch (error) {
    return error;
  }
};

// Function to call database get specific user details
const QueryGetReviews = async (lawyerUID, collection, limit, skip) => {
  try {
    const query = { lawyerUID: lawyerUID };
    const cursor = await getCollection(collection).findOne(query);
    let results = cursor.reviews;
    results = results.reverse();
    let arrayOfReviews = [];
    if (results.length > skip) {
      for (let i = skip; i < limit + skip; i++) {
        if (results[i]) {
          arrayOfReviews.push(results[i]);
        }
      }
      return arrayOfReviews;
    }
    return false;
  } catch (error) {
    return error;
  }
};

// Function to call database get specific user review based on rating search
const QueryRatingReviews = async (
  lawyerUID,
  ratings,
  collection,
  limit,
  skip
) => {
  try {
    const query = { lawyerUID: lawyerUID };
    const cursor = await getCollection(collection).findOne(query);
    let results = cursor.reviews;
    results = filterReviewsRatings(results, parseInt(ratings));
    let arrayOfReviews = [];
    if (results.length > skip) {
      for (let i = skip; i < limit + skip; i++) {
        if (results[i]) {
          arrayOfReviews.push(results[i]);
        }
      }
      return arrayOfReviews;
    }
    return false;
  } catch (error) {
    return error;
  }
};

// Function to call user details based on a review
const QueryFetchUsers = async (uids) => {
  try {
    const query = { UID: { $in: uids } };
    const result = await getCollection("users").find(query).toArray();
    return result;
  } catch (error) {
    return error;
  }
};

// Add reply to a review
const QueryAddReviewReply = async (reply, lawyerID, reviewID, collection) => {
  console.log(reply, lawyerID, reviewID);
  try {
    const getReviewRef = await getCollection(collection).updateOne(
      {
        lawyerUID: lawyerID,
        "reviews._id": new ObjectId(reviewID),
      },
      {
        $set: {
          "reviews.$.reply": reply,
        },
      }
    );
    return getReviewRef;
  } catch (error) {
    return error;
  }
};

const QueryAddReview = async (lawyerID, review, collection) => {
  try {
    // add object id to each reviews
    review._id = new ObjectId();
    const query = { lawyerUID: lawyerID };
    const initSearch = await getCollection(collection).findOne({
      lawyerUID: lawyerID,
    });
    console.log(initSearch);
    if (!initSearch) {
      const createDoc = await getCollection(collection).insertOne({
        lawyerUID: lawyerID,
      });
    }
    const result = await getCollection(collection).updateOne(
      query,
      { $push: { reviews: review } },
      (err, Result) => {
        if (err) {
          console.error(err);
          return err;
        }
        console.log(`Added review to lawyer ${lawyerID}: ${review}`);
      }
    );
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  QueryGetReviews,
  QueryAddReview,
  QueryFetchUsers,
  QueryRatingReviews,
  QueryGetAllReviews,
  QueryAddReviewReply,
};

// {UID: "asfiu3ruiwjci",
//  Reviews: [{
//     name: "user name",
//     email: "user@email.com",
//     profile: "http://kncu3u289.cdosk"
//  }]
// }
