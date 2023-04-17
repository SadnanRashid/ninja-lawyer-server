const { getCollection } = require("../database");

// Get a lawyers all orders
const QueryGetOrders = async (lawyerID, collection) => {
  try {
    const query = { lawyerUID: lawyerID };
    const result = getCollection(collection).findOne(query);
    return result;
  } catch (error) {
    return error;
  }
};

// Post an order with status pending
const QueryPostOrder = async (lawyerID, data, collection) => {
  try {
    const query = { lawyerUID: lawyerID };
    const initSearch = await getCollection(collection).findOne(query);

    if (!initSearch) {
      const createDoc = await getCollection(collection).insertOne(query);
    } // create an order doc if it doesn't exist for certain lawyer
    const result = getCollection(collection).updateOne(
      query,
      {
        $push: { orders: data },
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

module.exports = { QueryPostOrder, QueryGetOrders };
