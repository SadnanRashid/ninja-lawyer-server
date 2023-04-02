const { getCollection } = require("../database");
const { ObjectId } = require("mongodb");

// Fucntion to post a log in database
const QueryAddRecordLawyer = async (UID, action, timestamp) => {
  try {
    let updateObj = { $push: {} };
    updateObj.$push[action] = { action, timestamp };
    const result = await getCollection("lawyers_log").updateOne(
      { UID: UID },
      updateObj,
      { upsert: true }
    );

    // const result = await getCollection("users_log").insertOne(data);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    console.log(result);
    return result;
  } catch (error) {
    return error;
  }
};

// Function to call database get all logs of user's records
const QueryGetRecordsLawyer = async (UID) => {
  try {
    const query = { UID: UID }; //new ObjectId(id)
    const cursor = getCollection("lawyers_log").findOne(query);
    const records = await cursor;
    return records;
  } catch (error) {
    return error;
  }
};

module.exports = { QueryAddRecordLawyer, QueryGetRecordsLawyer };
