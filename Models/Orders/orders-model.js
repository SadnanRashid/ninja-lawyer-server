const { getCollection } = require("../database");

// Function to call database get specific user details
const QueryPostOrder = async (lawyerID, data, collection) => {
  try {
    const query = { lawyerUID: lawyerID };
    const cursor = getCollection(collection).updateOne(query, {
      $push: { orders: data },
    });
  } catch (error) {
    return error;
  }
};

module.exports = { QueryPostOrder };
