const {
  QueryAddRecord,
  QueryGetRecords,
} = require("../../Models/User/user-logs");
const { currentTime } = require("../../Services/timestamp");

// const PostRecord = async (req, res) => {
//   // Get current server time
//   const timeStamp = currentTime();
//   const data = req.body;
//   //   add time to post data
//   data.timestamp = timeStamp;
//   //   Get results from database
//   const postResult = await QueryAddRecord(data);
//   return res.json(postResult);
// };
const PostRecord = async (data) => {
  // Get current server time
  const timeStamp = currentTime();
  //   add time to post data
  data.timestamp = timeStamp;
  //   Get results from database
  const postResult = await QueryAddRecord(data);
  console.log(postResult);
  return postResult;
};

// Get user details function
const GetRecords = async (req, res) => {
  // get from database
  const logs = await QueryGetRecords(req.params.id);
  console.log(targetUser);
  if (!targetUser) {
    return res.status(404).send({ message: "data not found" });
  }
  return res.json(targetUser);
};

module.exports = { PostRecord, GetRecords };

// POSTRECORD:
// const doc = {
//     userID: "1287yf2387fh873hee",
//     action: "profile update",
//     timestamp: time
// }
