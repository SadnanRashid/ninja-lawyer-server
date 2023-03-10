const { QueryAddUser } = require("../../Models/User/user-initial");
const { currentTime } = require("../../Services/timestamp");

const PostUser = async (req, res) => {
  // Get current server time
  const timeStamp = currentTime();
  const data = req.body;
  //   add time to post data
  data.timestamp = timeStamp;
  //   Get results from database
  const postResult = await QueryAddUser(data);
  return res.json(postResult);
};

module.exports = { PostUser };
