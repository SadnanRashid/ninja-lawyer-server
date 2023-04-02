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

router.get("/test", () => {
  console.log("Working test");
});
// Post new use data to database
router.post("/add", PostUser);
// Get user data from database
router.get("/get/:id", GetUser);
// Update user data from database
router.put("/update/:id", UpdateUser);

// LOGS
// Get user logs from database
router.get("/logs/get/:id", GetRecords);
router.post("/logs/post", PostRecord);

//
// Lawyer routes
router.post("/add-lawyer", PostLawyer);
// Get all lawyers
router.get("/get-lawyers/all", GetAllLawyer);
// Get paginate lawyers
router.get("/get-lawyers", GetLawyersPaginate);
// Delete a lawyer
router.delete("/lawyer/delete/:id", DeleteLawyer);
// Get one lawyer details
router.get("/get-lawyer/:id", GetLawyer);
// Update lawyer data
router.put("/lawyer/update/:id", UpdateLawyer);
// Get all unverified lawyers
router.get("/lawyer/unverified", GetAllUnverfiedLawyer);
// Verify a lawyer
router.put("/lawyer/verify/:id", VerifyLawyer);
// Get queried lawyers
router.get("/lawyer/search", GetQueryLawyer);
// Get queried lawyers based on specialties
router.get("/lawyer/search-specialties/:query", GetQueryLawyerSpecialties);

// router.get("/all", GetAllContacts);
// router.get("/get", validatePagenation, GetPaginateContacts);
// router.get("/getmatch/:phase", validateParamOfPhase, GetMatchingContact);
// router.get("/:id", validateID, GetTargetContact);
// router.post("/add", verifyJWT, validatePost, PostOneContact);
// router.post("/addmany", verifyJWT, PostManyContact);
// router.put("/update/:id", verifyJWT, validateID, UpdateContact);
// router.delete("/delete/:id", verifyJWT, validateID, DeleteContact);
// return router
module.exports = router;
