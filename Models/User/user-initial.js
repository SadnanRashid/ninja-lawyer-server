const { getCollection } = require("../database");
const { ObjectId } = require("mongodb");

const QueryAddUser = async (data) => {
  try {
    const doc = {
      name: "sadnan rashid",
      email: "sadnan.rashid.07@gmail.com",
      phone: "+8801312300741",
    };
    const result = await getCollection("users").insertOne(data);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    return result;
  } catch (error) {
    return error;
  }
};

// Function to call database get specific user details
const QueryGetUser = async (id) => {
  try {
    const query = { _id: new ObjectId(id) };
    const cursor = await getCollection("users").findOne(query);
    return cursor;
  } catch (error) {
    return error;
  }
};

// Update an element
const QueryUpdateUserDetails = async (userID, updateData) => {
  try {
    const filter = { _id: new ObjectId(userID) };
    const result = await getCollection("users").replaceOne(filter, updateData);
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { QueryAddUser, QueryGetUser, QueryUpdateUserDetails };
