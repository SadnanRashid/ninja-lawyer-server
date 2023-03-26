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

// Function to call database get specific user details
const QuerySearchLaywer = async (query, collection) => {
  try {
    // const session = await client.startSession(); //remove **
    const cursor = await getCollection(collection)
      .find(query)
      .toArray()
      .then((items) => {
        console.log(items);
        return items;
      }); // ,{ session }
    // return cursor.toArray();
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = {
  QueryUnverfiedLawyer,
  QuerySearchLaywer,
};
