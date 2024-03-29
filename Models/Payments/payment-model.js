const { ObjectId } = require("mongodb");
const { getCollection } = require("../database");

// Get payments transactions of an user
const QueryGetTransactions = async (userType, UID) => {
  let result;
  if (userType === "lawyer") {
    console.log(userType);
    result = await getCollection("payments").find({ LawyerID: UID });
  } else if (userType === "user") {
    console.log(userType);
    result = await getCollection("payments").find({ UserID: UID });
  }
  return result.toArray();
};

const QueryAddPayment = async (data, collection) => {
  const { userID, lawyerID, amount, paymentID, orderID, timestamp } = data;

  const addPayment = await getCollection(collection).insertOne({
    UserID: userID,
    LawyerID: lawyerID,
    amount: amount,
    timestamp: timestamp,
    paymentID,
    orderID,
  });

  return addPayment;
};

module.exports = { QueryAddPayment, QueryGetTransactions };
