const { getCollection } = require("../database");

// Function to call database get specific user details
const QueryPostOrder = async (collection, status) => {
  try {
    const query = { verified: status };
    // const query = { verified: { $exists: false } };
    const cursor = getCollection(collection).find(query);
    return cursor.toArray();
  } catch (error) {
    return error;
  }
};

module.exports = { QueryPostOrder };
