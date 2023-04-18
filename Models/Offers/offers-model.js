const { getCollection } = require("../database");

const QuerySpecificOffer = async (lawyerID, userID, collection) => {
  try {
    const getSpecific = await getCollection(collection).findOne({
      lawyerUID: lawyerID,
    });
    return getSpecific;
  } catch (error) {}
};

module.exports = { QuerySpecificOffer };
