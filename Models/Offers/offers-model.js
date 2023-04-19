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

// Get users offers:
const QueryUserOffers = async (userID, collection) => {
  try {
    const result = await getCollection(collection).aggregate([
      { $match: { "offers.UID": userID } },
      { $unwind: "$offers" },
      { $match: { "offers.UID": userID } },
      { $group: { _id: null, offers: { $push: "$offers" } } },
      { $project: { _id: 0, offers: 1 } },
    ]);

    const temp = await result.toArray();
    console.log(temp);
    const offersArray = [...temp[0].offers];
    return offersArray;
  } catch (error) {
    return error;
  }
};

// Post an order with status pending
const QueryPostOffer = async (lawyerID, data, collection) => {
  try {
    data._id = new ObjectId();
    data.lawyerUID = lawyerID;
    console.log(data._id);
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
  const filter = {
    lawyerUID: lawyerUID,
    "offers._id": new ObjectId(offerID),
  };

  const update = {
    $set: {
      "offers.$.offerstatus": offerStatus,
    },
  };

  const getDoc = getCollection(collection).updateOne(filter, update);

  return getDoc;
};

module.exports = {
  QuerySpecificOffer,
  QueryPostOffer,
  QueryChangeStatus,
  QueryUserOffers,
};
