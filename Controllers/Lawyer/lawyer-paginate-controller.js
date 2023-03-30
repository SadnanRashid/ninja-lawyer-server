const { QueryGetAll } = require("../../Models/User/user-initial");

//   Get paginate of lawyers
const GetLawyers = async (req, res) => {
  const page = req.query.page || 1; // default to first page
  const limit = parseInt(req.query.limit) || 10; // default limit to 10 documents per page
  const skip = (page - 1) * limit;

  try {
    const lawyers = await QueryGetAll("lawyers", limit, skip);
    if (!lawyers.length) {
      return res.status(404).send({ message: "No lawyers found" });
    }
    return res.json(lawyers);
  } catch (error) {
    return res.status(500).send({ message: "Server Error" });
  }
};

module.exports = {
  GetLawyers,
};
