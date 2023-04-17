const { QueryPostOrder } = require("../../Models/Orders/orders-model");

// Controller to post an order to DB
const PostOrder = async (req, res) => {
  const lawyerID = req.params.id;
  const data = req.body;

  const query = lawyerID;

  const result = await QueryPostOrder(lawyerID, data);
};
