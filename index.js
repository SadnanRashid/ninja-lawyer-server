const express = require("express");
const port = process.env.PORT || 5000;

const app = express();
//
// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//
app.listen(port, () => {
  console.log(`listening at port ${port}`);
});

// Get user router
const userRouter = require("./Routes/user/user-routes");
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send({ message: "Working..." });
});
