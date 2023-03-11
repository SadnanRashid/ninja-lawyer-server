const {
  QueryAddRecord,
  QueryGetRecords,
} = require("../../Models/User/user-logs");
const { currentTime } = require("../../Services/timestamp");

const PostRecord = async (req, res) => {
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
  // add last update using a sideeffect
  const data = addTimestampToUpdate(req.body.update_data);
  const updateResult = await QueryUpdateUserDetails(id, data);
  res.json(updateResult);
};

module.exports = { PostRecord, GetRecords };
