const {
  QueryAddRecordLawyer,
  QueryGetRecordsLawyer,
} = require("../../Models/Lawyers/lawyer-logs");
const { currentTime } = require("../../Services/timestamp");

const PostRecordLawyer = async (req, res) => {
  const UID = req.query.UID;
  const action = req.query.action;
  // Get current server time
  const timeStamp = currentTime();
  console.log(UID, action, timeStamp);
  const postResult = await QueryAddRecordLawyer(UID, action, timeStamp);
  console.log(postResult);
  res.json(postResult);
};

// Get user details function
const GetRecordsLawyer = async (req, res) => {
  // get from database
  const logs = await QueryGetRecordsLawyer(req.params.id);
  console.log(logs);
  if (!logs) {
    return res.status(404).send({ message: "data not found" });
  }
  return res.json(logs);
};

module.exports = { PostRecordLawyer, GetRecordsLawyer };
