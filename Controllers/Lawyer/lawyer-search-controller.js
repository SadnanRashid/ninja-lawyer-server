const { query } = require("express");
const { QuerySearchLaywer } = require("../../Models/Lawyers/lawyer-model");
const {
  titleCase,
  capitalizeAndReplace,
} = require("../../Services/capitalize");
const {
  sortSpecialties,
} = require("../../Services/Lawyers/lawyers-sort-specialties");

// Get all lawyers details
const GetQueryLawyer = async (req, res) => {
  const perams = req.query;
  const searchKey = Object.keys(perams)[0];
  let searchValue = Object.values(perams)[0];
  searchValue = titleCase(searchValue);
  console.log(searchValue);
  let query = {};
  // Assign key and value to query object
  query[searchKey] = searchValue;
  //   Check if specialties
  // get from database
  const targetUser = await QuerySearchLaywer(query, "lawyers");
  console.log("targetUser");
  if (!targetUser) {
    return res.status(404).send({ message: "data not found" });
  }
  return res.json(targetUser);
};

// Get all lawyers details with specialties
const GetQueryLawyerSpecialties = async (req, res) => {
  let data = req.params.query.split(",");
  data = capitalizeAndReplace(data);
  console.log(data);
  const query = {
    specialties: { $in: data.map((s) => new RegExp(`^\\s*${s}`, "i")) },
  };
  const targetUser = await QuerySearchLaywer(query, "lawyers");
  if (!targetUser) {
    return res.status(404).send({ message: "data not found" });
  }
  const returnData = sortSpecialties(targetUser, data);
  return res.json(returnData);
};

module.exports = {
  GetQueryLawyer,
  GetQueryLawyerSpecialties,
};
