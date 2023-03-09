const { QueryAddUser } = require("../../Models/User/user-initial");

const PostUser = async (req, res) => {
  const data = req.body;
  console.log(data);
  const postResult = await QueryAddUser(data);
  console.log(postResult);
  return res.json(postResult);
};

module.exports = { PostUser };
