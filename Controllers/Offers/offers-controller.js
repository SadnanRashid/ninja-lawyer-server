const {
  QueryPostOrder,
  QueryGetOrders,
} = require("../../Models/Orders/orders-model");
const { currentTime } = require("../../Services/timestamp");

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
    // Set payment as false and offer status as false
    data.payment = false;
    data.offerstatus = false;

    console.log(lawyerID, data);

    // post offer
    const result = await QueryPostOrder(lawyerID, data, "orders");
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { PostOrder, GetOrders };
