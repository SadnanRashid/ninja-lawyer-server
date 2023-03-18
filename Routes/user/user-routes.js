const express = require("express");
const router = express.Router();
const {
  PostUser,
  GetUser,
  UpdateUser,
} = require("../../Controllers/User/user-data-controller");
const { GetRecords } = require("../../Controllers/User/user-log-controller");
const {
  PostLawyer,
  GetLawyer,
} = require("../../Controllers/Lawyer/lawyer-data-controller");

router.get("/test", () => {
  console.log("Working test");
});
// Post new use data to database
router.post("/add", PostUser);
// Get user data from database
router.get("/get/:id", GetUser);
// Update user data from database
router.put("/update/:id", UpdateUser);
// Get user logs from database
router.get("/get-logs/:id", GetRecords);

// Lawyer routes
router.post("/add-lawyer", PostLawyer);
router.get("/get-lawyer/:id", GetLawyer);

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
