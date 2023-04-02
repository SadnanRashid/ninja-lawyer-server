const express = require("express");
const router = express.Router();
const {
  PostUser,
  GetUser,
  UpdateUser,
} = require("../../Controllers/User/user-data-controller");
const {
  GetRecords,
  PostRecord,
} = require("../../Controllers/User/user-log-controller");
const {
  PostLawyer,
  GetLawyer,
  GetAllLawyer,
  DeleteLawyer,
  UpdateLawyer,
  GetAllUnverfiedLawyer,
  VerifyLawyer,
} = require("../../Controllers/Lawyer/lawyer-data-controller");
const {
  GetQueryLawyer,
  GetQueryLawyerSpecialties,
} = require("../../Controllers/Lawyer/lawyer-search-controller");
const {
  GetLawyersPaginate,
} = require("../../Controllers/Lawyer/lawyer-paginate-controller");

const {
  PostRecordLawyer,
  GetRecordsLawyer,
} = require("../../Controllers/Lawyer/lawyer-log.controller");
//
//

router.get("/test", () => {
  console.log("Working test");
});

// Get user logs from database
// router.get("/logs/get/:id", GetRecords);
// router.post("/logs/post", PostRecord);

// return router
module.exports = router;
