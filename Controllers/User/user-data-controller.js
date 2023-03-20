const {
  QueryAddUser,
  QueryGetUser,
  QueryUpdateUserDetails,
} = require("../../Models/User/user-initial");
const { PostRecord, GetRecords } = require("../User/user-log-controller");
const { addTimestampToUpdate } = require("./UserSides/manipulate.update");
const { currentTime } = require("../../Services/timestamp");

const PostUser = async (req, res) => {
  const data = req.body;
  // console.log("data", data.UID);
  const checkExist = await QueryGetUser(data.UID, "users");
  if (!checkExist) {
    //Get current server time
    const timeStamp = currentTime();
    //add time to post data
    data.timestamp = timeStamp;
    //Get results from database
    const postResult = await QueryAddUser(data, "users");
    return res.json(postResult);
  } else {
    return res.json({ message: "Already exist" });
  }
};

// Get user details function
const GetUser = async (req, res) => {
  // get from database
  const targetUser = await QueryGetUser(req.params.id, "users");
  console.log(targetUser);
  if (!targetUser) {
    return res.status(404).send({ message: "data not found" });
  }
  return res.json(targetUser);
};

// Update Details
const UpdateUser = async (req, res) => {
  const id = req.params.id;
  let data = req.body;
  // add last update using a sideeffect
  data = addTimestampToUpdate(req.body.update_data);
  console.log(data);
  const updateResult = await QueryUpdateUserDetails(id, data, "users");
  const logResult = await PostRecord({ userID: id, action: "profile update" });
  // ** add logResult to a obj and send both
  res.json(updateResult);
};

module.exports = { PostUser, GetUser, UpdateUser };
