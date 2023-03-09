const { QueryGetUser } = require("../Services/users");
const jwt = require("jsonwebtoken");

const GetJWT = async (req, res) => {
  const email = req.params.email;
  const user = await QueryGetUser(email);
  if (user) {
    const token = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, {
      expiresIn: "1d",
    });
    return res.send({ accessToken: token });
  }
  res.status(403).send({ accessToken: "" });
};

module.exports = { GetJWT };
