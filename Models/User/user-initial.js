const { getCollection } = require("../database");
const { ObjectId } = require("mongodb");

const QueryAddUser = async (data) => {
  try {
    const result = await getCollection("users").insertOne(data);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    return result;
  } catch (error) {
    return error;
  }
};

// Function to call database get specific user details
const QueryGetUser = async (UID) => {
  try {
    const query = { UID: UID };
    const cursor = await getCollection("users").findOne(query);
    return cursor;
  } catch (error) {
    return error;
  }
};

// Update an element
const QueryUpdateUserDetails = async (UID, updateData) => {
  console.log("------");
  try {
    const filter = { UID: UID };
    const result = await getCollection("users").replaceOne(filter, updateData);
    console.log(result, "------");
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  QueryAddUser,
  QueryGetUser,
  QueryUpdateUserDetails,
};
