const {
  QueryPostOrder,
  QueryGetOrders,
} = require("../../Models/Offers/offers-model");
const { QuerySpecificOffer } = require("../../Models/Offers/offers-model");
const { currentTime } = require("../../Services/timestamp");
const {
  getSpecificUserElement,
} = require("../../Services/Offers/specific-offer");

// Get specific user offers
const GetSpecificOffer = async (req, res) => {
  try {
    const lawyerID = req.query.lawyerid;
    const userID = req.query.userid;

    const result = await QuerySpecificOffer(lawyerID, userID, "offers");

    const filterResult = getSpecificUserElement(result);
    res.json(filterResult);
  } catch (error) {
    res.send(error);
  }
};

// Controller to get an lawyer orders from DB
const GetOffer = async (req, res) => {
  try {
    const lawyerID = req.params.id;
    const result = await QueryGetOrders(lawyerID, "offers");
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};

// Controller to post an order to DB
const PostOffer = async (req, res) => {
  try {
    const lawyerID = req.params.id;
    const data = req.body;
    data.timestamp = currentTime();
    // Set payment as false and offer status as false
    data.payment = false;
    data.offerstatus = false;

    console.log(lawyerID, data);

    // post offer
    const result = await QueryPostOrder(lawyerID, data, "offers");
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { GetSpecificOffer, GetOffer, PostOffer };
