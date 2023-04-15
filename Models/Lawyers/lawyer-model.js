const { getCollection } = require("../database");
const { ObjectId } = require("mongodb");

// Function to call database get specific user details
const QueryUnverfiedLawyer = async (collection, status) => {
  try {
    const query = { verified: status };
    // const query = { verified: { $exists: false } };
    const cursor = getCollection(collection).find(query);
    return cursor.toArray();
  } catch (error) {
    return error;
  }
};

// Function to verify a laweyer

// Function to call database get specific user details
const QuerySearchLaywer = async (query, collection) => {
  try {
    // const session = await client.startSession(); //remove **
    const cursor = await getCollection(collection).find(query).toArray();

    return cursor;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Lawyer pagination model:
const QueryGetPaginate = async (collection, limit, skip) => {
  try {
    const query = {};
    const cursor = getCollection(collection)
      .find(query)
      .skip(skip)
      .limit(limit);
    return cursor.toArray();
  } catch (error) {
    return error;
  }
};

module.exports = {
  QueryUnverfiedLawyer,
  QuerySearchLaywer,
  QueryGetPaginate,
};
