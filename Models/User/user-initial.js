const { getCollection } = require("../database");
const { ObjectId } = require("mongodb");

const QueryAddUser = async (data, collection) => {
  try {
    const result = await getCollection(collection).insertOne(data);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
    return result;
  } catch (error) {
    return error;
  }
};

// Function to call database get specific user details
const QueryGetUser = async (UID, collection) => {
  try {
    // const query = { UID: UID };
    const query = { $or: [{ uid: UID }, { UID: UID }] };
    const cursor = await getCollection(collection).findOne(query);
    return cursor;
  } catch (error) {
    return error;
  }
};

// Function to get all queries in a collection
const QueryGetAll = async (collection) => {
  try {
    const query = {};
    const cursor = getCollection(collection).find(query);
    return cursor.toArray();
  } catch (error) {
    return error;
  }
};

// Update an element
const QueryUpdateUserDetails = async (UID, updateData, collection) => {
  try {
    const filter = { UID: UID };
    const result = await getCollection(collection).replaceOne(
      filter,
      updateData
    );
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};
// // Update an element
const QueryUpdateLawyerDetails = async (UID, updateData, collection) => {
  try {
    const filter = { UID: UID };
    const result = await getCollection(collection).updateOne(
      filter,
      updateData
    );
    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

// Delete a record
const QueryDeleteUser = async (UID, collection) => {
  try {
    const filter = { UID: UID };
    const result = await getCollection(collection).deleteOne(filter);
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
  QueryGetAll,
  QueryDeleteUser,
  QueryUpdateLawyerDetails,
};
