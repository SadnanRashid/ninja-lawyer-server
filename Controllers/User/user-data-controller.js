const {
  QueryAddUser,
  QueryGetUser,
  QueryUpdateUserDetails,
} = require("../../Models/User/user-initial");
const { addTimestampToUpdate } = require("./UserSides/manipulate.update");
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

// Get user details function
const GetUser = async (req, res) => {
  // get from database
  const targetUser = await QueryGetUser(req.params.id);
  console.log(targetUser);
  if (!targetUser) {
    return res.status(404).send({ message: "data not found" });
  }
  return res.json(targetUser);
};

// Update Details
const UpdateUser = async (req, res) => {
  const id = req.params.id;
  console.log(req.body.update_data);
  const data = addTimestampToUpdate();
  const updateResult = await QueryUpdateUserDetails(id, data);
  res.json(updateResult);
};

module.exports = { PostUser, GetUser, UpdateUser };
