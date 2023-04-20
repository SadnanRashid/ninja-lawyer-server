const {
  QueryPostOrder,
  QueryGetOrders,
  QueryUserOrders,
  QueryOrderWithID,
  QueryChangeStatus,
} = require("../../Models/Orders/orders-model");
const { currentTime } = require("../../Services/timestamp");
const { filterReviewOnTime } = require("../../Services/Reviews/reviews-filter");

// Get a specific order details

const GetOrderWithID = async (req, res) => {
  const id = req.params.id;
  const result = await QueryOrderWithID(id, "orders");
  res.json(result);
};

// Get all orders from a user
const GetUserOrders = async (req, res) => {
  const userID = req.params.id;
  console.log(userID);
  const result = await QueryUserOrders(userID, "orders");

  res.json(result);
};

// Controller to get an lawyer orders from DB
const GetOrders = async (req, res) => {
  try {
    const lawyerID = req.params.id;
    //
    let result = await QueryGetOrders(lawyerID, "orders");
    result = filterReviewOnTime(result);
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};

// Controller to post an order to DB
const PostOrder = async (req, res) => {
  try {
    const lawyerID = req.params.id;
    const data = req.body;
    data.timestamp = currentTime();
    // Post a status with pending
    data.status = "pending";
    data.payment = false;
    data.lawyerUID = lawyerID;

    const result = await QueryPostOrder(lawyerID, data, "orders");
    console.log(lawyerID, result);
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};

// change offer status
const ChangeStatus = async (req, res) => {
  try {
    const offerID = req.query.orderid;
    const lawyerID = req.query.lawyerid;
    const offerStatus = req.query.offerstatus;
    const payment = req.query.payment;
    console.log(offerID, lawyerID);

    if (!offerID || !lawyerID) {
      res.send({
        acknowledged: false,
        message: "Must enter offerID and lawyerID",
      });
    }

    const result = await QueryChangeStatus(
      lawyerID,
      offerID,
      offerStatus,
      payment,
      "orders"
    );

    res.json(result);
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  PostOrder,
  GetOrders,
  GetUserOrders,
  GetOrderWithID,
  ChangeStatus,
};
