const {
  QueryAddUser,
  QueryGetUser,
  QueryUpdateUserDetails,
  QueryGetAll,
  QueryDeleteUser,
  QueryUpdateLawyerDetails,
} = require("../../Models/User/user-initial");
const {
  QueryUnverfiedLawyer,
  QuerySearchLaywer,
} = require("../../Models/Lawyers/lawyer-model");
const { addTimestampToUpdate } = require("../User/UserSides/manipulate.update");
const { currentTime } = require("../../Services/timestamp");
const { titleCase } = require("../../Services/capitalize");

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

// Get all unverified lawyers details
const GetAllUnverfiedLawyer = async (req, res) => {
  // get from database
  const targetUser = await QueryUnverfiedLawyer("lawyers");
  console.log(targetUser);
  if (!targetUser) {
    return res.status(404).send({ message: "Data not found" });
  }
  return res.json(targetUser);
};

//Lawyer verify
const VerifyLawyer = async (req, res) => {
  const id = req.params.id;
  const data = { verified: true };
  const updateFields = { $set: data };
  const updateResult = await QueryUpdateLawyerDetails(
    id,
    updateFields,
    "lawyers"
  );
  res.json(updateResult);
};

// Laywer reject
const RejectLawyer = async (req, res) => {
  try {
    const id = req.params.id;
    const updateData = { $set: { verified: "rejected" } };
    // reject lawyer
    const result = await QueryUpdateLawyerDetails(id, updateData, "lawyers");
    res.json(result);
  } catch (error) {
    res.send(error);
  }
};

// Update Details
const UpdateLawyer = async (req, res) => {
  const id = req.params.id;
  let data = req.body.update_data;
  console.log("+++", data);
  // add last update using a sideeffect
  data = addTimestampToUpdate(data);
  //
  const updateFields = {
    $set: {
      name: data.name,
      state: data.state,
      city: data.city,
      rate: data.rate,
      barID: data.barID,
      id: data.id,
      barYear: data.barYear,
      specialties: data.specialties,
      rate: data.rate,
      languages: data.languages,
      summary: data.summary,
      verified: data.verified,
      contact: data.contact,
      // add any other fields to update here
    },
  };
  const updateResult = await QueryUpdateLawyerDetails(
    id,
    updateFields,
    "lawyers"
  );
  console.log(updateResult, "updateResult");
  // ** add logResult to a obj and send both
  res.json(updateResult);
};

// Delete lawyer
const DeleteLawyer = async (req, res) => {
  const id = req.params.id;
  const updateResult = await QueryDeleteUser(id, "lawyers");
  res.json(updateResult);
};

module.exports = {
  PostLawyer,
  GetLawyer,
  UpdateLawyer,
  GetAllLawyer,
  DeleteLawyer,
  GetAllUnverfiedLawyer,
  VerifyLawyer,
  RejectLawyer,
};
