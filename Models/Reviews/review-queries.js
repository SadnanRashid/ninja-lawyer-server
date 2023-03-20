const { getCollection } = require("../database");
const { ObjectId } = require("mongodb");

// Function to call database get specific user details
const QueryGetReviews = async (UID, collection) => {
  try {
    const query = { UID: UID };
    const cursor = await getCollection(collection).findOne(query);
    return cursor;
  } catch (error) {
    return error;
  }
};

const QueryAddReview = async (lawyerID, data, collection) => {
  try {
    const result = await getCollection(collection).insertOne(data);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  QueryGetReviews,
};

// {UID: "asfiu3ruiwjci",
//  Reviews: [{
//     name: "user name",
//     email: "user@email.com",
//     profile: "http://kncu3u289.cdosk"
//  }]
// }
