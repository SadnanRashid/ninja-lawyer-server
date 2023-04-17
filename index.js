const express = require("express");
const port = process.env.PORT || 5000;
const app = express();
const cors = require("cors");
// const corsOptions = {
//   origin: "*",
//   credentials: true, //access-control-allow-credentials:true
//   optionSuccessStatus: 200,
// };
//
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
//
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});

// Get user router
const userRouter = require("./Routes/user/user-routes");
app.use("/api/users", userRouter);
// Get reviews router
const reviewsRouter = require("./Routes/reviews/reviews-routes");
app.use("/api/reviews", reviewsRouter);
// Get admin routes
const adminRouter = require("./Routes/admin/admin-routes");
app.use("/api/admin", adminRouter);
// Get order routes
const orderRouter = require("./Routes/orders/orders-router");
app.use("/api/orders/", orderRouter);

app.get("/", (req, res) => {
  res.send({ message: "Working..." });
});

app.get("/check", (req, res) => {
  // const result = checkConnection();
  res.json(req.query);
});
