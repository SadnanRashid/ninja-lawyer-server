const { ObjectId } = require("mongodb");
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

// Get an specific order
const QueryOrderWithID = async (id, collection) => {
  try {
    const ID = new ObjectId(id);
    console.log(ID);
    const result = await getCollection(collection).aggregate([
      {
        $project: {
          matchedOrders: {
            $filter: {
              input: "$orders",
              as: "order",
              cond: { $eq: ["$$order._id", ID] },
            },
          },
        },
      },
    ]);
    const temp = await result.toArray();
    return temp[0].matchedOrders[0];

    // const temp = result.toArray();
    // const offersArray = [...temp[0].matchedOrders];

    // return offersArray;
  } catch (error) {
    return error;
  }
};

// Get users offers:
const QueryUserOrders = async (userID, collection) => {
  try {
    const result = await getCollection(collection).aggregate([
      { $match: { "orders.UID": userID } },
      { $unwind: "$orders" },
      { $match: { "orders.UID": userID } },
      { $group: { _id: null, orders: { $push: "$orders" } } },
      { $project: { _id: 0, orders: 1 } },
    ]);

    const temp = await result.toArray();
    console.log(temp);
    console.log(temp);
    const ordersArray = [...temp[0].orders];
    return ordersArray;
  } catch (error) {
    return error;
  }
};

// Post an order with status pending
const QueryPostOrder = async (lawyerID, data, collection) => {
  try {
    data._id = new ObjectId();
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

module.exports = {
  QueryPostOrder,
  QueryGetOrders,
  QueryUserOrders,
  QueryOrderWithID,
};
