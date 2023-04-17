const { QueryPostOrder } = require("../../Models/Orders/orders-model");

// Controller to post an order to DB
const PostOrder = async (req, res) => {
  try {
    const lawyerID = req.params.id;
    const data = req.body;

    const result = await QueryPostOrder(lawyerID, data);
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};
