const { QueryPostOrder } = require("../../Models/Orders/orders-model");
const { currentTime } = require("../../Services/timestamp");

// Controller to post an order to DB
const PostOrder = async (req, res) => {
  try {
    const lawyerID = req.params.id;
    const data = req.body;
    data.timestamp = currentTime();
    // Post a status with pending
    data.status = "pending";

    console.log(lawyerID, data);

    const result = await QueryPostOrder(lawyerID, data, "orders");
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { PostOrder };
