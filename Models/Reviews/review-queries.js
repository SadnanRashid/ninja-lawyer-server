const { getCollection } = require("../database");
const { ObjectId } = require("mongodb");

// Function to call database get specific user details
const QueryGetReviews = async (lawyerUID, collection) => {
  try {
    const query = { lawyerUID: lawyerUID };
    const cursor = await getCollection(collection).findOne(query);
    return cursor;
  } catch (error) {
    return error;
  }
};

const QueryAddReview = async (lawyerID, review, collection) => {
  try {
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
};

// {UID: "asfiu3ruiwjci",
//  Reviews: [{
//     name: "user name",
//     email: "user@email.com",
//     profile: "http://kncu3u289.cdosk"
//  }]
// }
