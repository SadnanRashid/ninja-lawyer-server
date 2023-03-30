const { QueryGetPaginate } = require("../../Models/Lawyers/lawyer-model");

//   Get paginate of lawyers
const GetLawyersPaginate = async (req, res) => {
  const page = req.query.page || 1; // default to first page
  const limit = parseInt(req.query.limit) || 10; // default limit to 10 documents per page
  const skip = (page - 1) * limit;
  console.log(page, limit, skip);

  try {
    const lawyers = await QueryGetPaginate("lawyers", limit, skip);
    if (!lawyers.length) {
      return res.status(404).send({ message: "No lawyers found" });
    }
    return res.json(lawyers);
  } catch (error) {
    return res.status(500).send({ message: "Server Error" });
  }
};

module.exports = {
  GetLawyersPaginate,
};
