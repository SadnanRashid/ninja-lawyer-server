const { getCollection } = require("../database");
const { ObjectId } = require("mongodb");

// Function to call database get specific user details
const QueryUnverfiedLawyer = async (collection) => {
  try {
    const query = { verified: false };
    const cursor = getCollection(collection).find(query);
    return cursor.toArray();
  } catch (error) {
    return error;
  }
};

module.exports = {
  QueryUnverfiedLawyer,
};
