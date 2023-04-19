const {
  QueryPostOrder,
  QueryGetOrders,
} = require("../../Models/Orders/orders-model");
const {
  QuerySpecificOffer,
  QueryPostOffer,
} = require("../../Models/Offers/offers-model");
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

    const filterResult = getSpecificUserElement(userID, result);
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
    data.offerstatus = "pending";

    // post offer
    const result = await QueryPostOffer(lawyerID, data, "offers");
    console.log(result);
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};

// change offer status
const ChangeStatus = async (req, res) => {
  try {
    const offerID = req.query.offerid;
    const lawyerID = req.query.lawyerid;

    if (!offerID || !lawyerID) {
      res.send({
        acknowledged: false,
        message: "Must enter offerID and lawyerID",
      });
    }
  } catch (error) {
    res.send(error);
  }
};

module.exports = { GetSpecificOffer, GetOffer, PostOffer };
