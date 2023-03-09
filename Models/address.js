const { getCollection } = require("./database");
const { ObjectId } = require("mongodb");

const QueryListOfContacts = async () => {
  try {
    const query = {};
    const cursor = getCollection("contacts").find(query);
    const contacts = await cursor.toArray();
    console.log(contacts);
    return contacts;
  } catch (error) {
    return error;
  }
};
// Get targeted contact with ID
const QueryTargetContact = async (id) => {
  try {
    const query = { _id: ObjectId(id) };
    const cursor = await getCollection("contacts").findOne(query);
    return cursor;
  } catch (error) {
    return error;
  }
};
// Get contact phase matching contacts
const QueryMatchingContact = async (phase) => {
  try {
    console.log(phase);
    const query = { $text: { $search: `\"${phase}\"` } };
    // what to return
    const projection = {
      _id: 1,
      email: 1,
      first_name: 1,
      last_name: 1,
      address: 1,
      phone: 1,
      country: 1,
    };
    const cursor = await getCollection("contacts")
      .find(query)
      .project(projection)
      .toArray();
    return cursor;
  } catch (error) {
    return error;
  }
};

// Post a contact
const QueryPostContact = async (data) => {
  try {
    const result = getCollection("contacts").insertOne(data);
    return result;
  } catch (error) {
    return error;
  }
};
// Post multiple
const QueryPostManyContact = async (data) => {
  try {
    const result = getCollection("contacts").insertMany(data);
    let ids = result.insertedIds;
    return result;
  } catch (error) {
    return error;
  }
};
// Update an element
const QueryUpdateContact = async (elementID, elementToUpdate, updateData) => {
  try {
    const filter = { _id: ObjectId(elementID) };
    const updateDocument = {
      $set: {
        [elementToUpdate]: updateData,
      },
    };
    const result = await getCollection("contacts").updateOne(
      filter,
      updateDocument
    );
    return result;
  } catch (error) {
    return error;
  }
};

// Delete contact
const QueryDeleteContact = async (id) => {
  try {
    const filter = { _id: ObjectId(id) };
    const result = await getCollection("contacts").deleteOne(filter);
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = {
  QueryListOfContacts,
  QueryTargetContact,
  QueryPostContact,
  QueryPostManyContact,
  QueryUpdateContact,
  QueryDeleteContact,
  QueryMatchingContact,
};
