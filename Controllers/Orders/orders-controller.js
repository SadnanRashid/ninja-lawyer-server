const {
  QueryPostOrder,
  QueryGetOrders,
  QueryUserOrders,
} = require("../../Models/Orders/orders-model");
const { currentTime } = require("../../Services/timestamp");

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
    const result = await QueryGetOrders(lawyerID, "orders");
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

module.exports = { PostOrder, GetOrders, GetUserOrders };
