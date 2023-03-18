const {
  QueryAddUser,
  QueryGetUser,
  QueryUpdateUserDetails,
  QueryGetAll,
} = require("../../Models/User/user-initial");
const { addTimestampToUpdate } = require("../User/UserSides/manipulate.update");
const { currentTime } = require("../../Services/timestamp");

const PostLawyer = async (req, res) => {
  const data = req.body;
  console.log("data", data.UID);
  //   const checkExist = await QueryGetUser(data.UID);
  //Get current server time
  const timeStamp = currentTime();
  //add time to post data
  data.timestamp = timeStamp;
  //Get results from database
  const postResult = await QueryAddUser(data, "lawyers");
  return res.json(postResult);
};

// Get user details function
const GetLawyer = async (req, res) => {
  // get from database
  const targetUser = await QueryGetUser(req.params.id, "lawyers");
  console.log(targetUser);
  if (!targetUser) {
    return res.status(404).send({ message: "data not found" });
  }
  return res.json(targetUser);
};

// Get all lawyers details
const GetAllLawyer = async (req, res) => {
  // get from database
  const targetUser = await QueryGetAll("lawyers");
  console.log("targetUser");
  if (!targetUser) {
    return res.status(404).send({ message: "data not found" });
  }
  return res.json(targetUser);
};

// Update Details
const UpdateLawyer = async (req, res) => {
  const id = req.params.id;
  let data = req.body;
  // add last update using a sideeffect
  data = addTimestampToUpdate(req.body.update_data);
  console.log(data);
  const updateResult = await QueryUpdateUserDetails(id, data);
  // ** add logResult to a obj and send both
  res.json(updateResult);
};

module.exports = { PostLawyer, GetLawyer, UpdateLawyer, GetAllLawyer };
