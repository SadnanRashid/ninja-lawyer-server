const { currentTime } = require("../../Services/timestamp");
const Razorpay = require("razorpay");
const { QueryAddPayment } = require("../../Models/Payments/payment-model");

const instance = new Razorpay({
  key_id: "rzp_test_2NMuV5JdVMywyO",
  key_secret: "1GoMQfaCMWSWecys1DtZu3W2",
});

const PostPayment = async (req, res) => {
  const data = req.body;
  const { userID, lawyerID, amount } = data;

  if (!userID || !lawyerID || !amount || !timestamp) {
    req.json({ message: "Invalid request" });
  }
  const options = {
    amount: amount * 100,
    currency: "INR",
    receipt: "order_receipt",
    payment_capture: 1,
  };
};
