const { getCollection } = require("../database");
const { ObjectId } = require("mongodb");

const QuerySpecificOffer = async (lawyerID, userID, collection) => {
  try {
    const getSpecific = await getCollection(collection).findOne({
      lawyerUID: lawyerID,
    });
    return getSpecific.offers;
  } catch (error) {}
};

// Post an order with status pending
const QueryPostOffer = async (lawyerID, data, collection) => {
  try {
    const query = { lawyerUID: lawyerID };
    const initSearch = await getCollection(collection).findOne(query);

    if (!initSearch) {
      const createDoc = await getCollection(collection).insertOne(query);
    } // create an order doc if it doesn't exist for certain lawyer
    const result = getCollection(collection).updateOne(
      query,
      {
        $push: { offers: data },
      },
      (err, Result) => {
        if (err) {
          console.error(err);
          return err;
        }
        console.log(`Added order to lawyer ${lawyerID}`);
      }
    );
    return result;
  } catch (error) {
    return error;
  }
};

const QueryChangeStatus = async (
  lawyerUID,
  offerID,
  offerStatus,
  collection
) => {
  const getDoc = await getCollection(collection).findOne({
    lawyerUID: lawyerUID,
  });

  const changeDoc = await getCollection.updateOne({ lawyerUID: lawyerUID });
};

module.exports = { QuerySpecificOffer, QueryPostOffer };
