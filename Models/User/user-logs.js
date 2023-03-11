const { getCollection } = require("../database");
const { ObjectId } = require("mongodb");

// Fucntion to post a log in database
const QueryAddRecord = async (data) => {
  try {
    const result = await getCollection("users_log").insertOne(data);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

// Function to call database get all logs of user's records
const QueryGetRecords = async (id) => {
  try {
    const query = { userID: id }; //new ObjectId(id)
    const cursor = getCollection("users_log").find(query);
    const records = await cursor.toArray();
    return records;
  } catch (error) {
    return error;
  }
};

module.exports = { QueryAddRecord, QueryGetRecords };
