const { ObjectId } = require("mongodb");
const { getCollection } = require("../database");

const QueryAddPayment = async (data, collection) => {
  const { userID, lawyerID, amount, timestamp } = data;

  const addPayment = await getCollection(collection).insertOne({
    UserID: userID,
    LawyerID: lawyerID,
    amount: amount,
    timestamp: timestamp,
  });

  return addPayment;
};

module.exports = { QueryAddPayment };
