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
    let databaseResult = {};
    if (response.amount) {
      databaseResult = await QueryAddPayment(
        { userID, lawyerID, amount, timestamp },
        "payments"
      );
      //
    }
    res.json({ response, databaseResult });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const PaymentVerification = (req, res) => {
  // do a validation
  const secret = "12345678";

  const crypto = require("crypto");

  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  if (digest === req.headers["x-razorpay-signature"]) {
    require("fs").writeFileSync(
      "payment1.json",
      JSON.stringify(req.body, null, 4)
    );
  }
  // else {
  // 	// pass it
  // }

  res.json({ status: "ok" });
};

module.exports = { PostPayment, PaymentVerification };
