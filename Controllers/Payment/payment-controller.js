const { currentTime } = require("../../Services/timestamp");
const Razorpay = require("razorpay");
const { QueryAddPayment } = require("../../Models/Payments/payment-model");

const instance = new Razorpay({
  key_id: "rzp_test_2NMuV5JdVMywyO",
  key_secret: "1GoMQfaCMWSWecys1DtZu3W2",
});

const PostPayment = async (req, res) => {
  const data = req.body;
  let { userID, lawyerID, amount } = data;
  amount = parseInt(amount);
  const timestamp = currentTime();

  if (!userID || !lawyerID || !amount) {
    // console.log(userID, lawyerID);
    res.json({ message: "Invalid request" });
  }

  const options = {
    amount: amount,
    currency: "INR",
    receipt: "order_receipt",
    payment_capture: 1,
  };
  console.log(typeof options.amount, options.amount);

  try {
    const response = await instance.orders.create(options);
    if (response.amount) {
      await QueryAddPayment({ userID, lawyerID, amount }, "payments");
    }
    res.json({ response });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { PostPayment };
