const express = require("express");
const router = express.Router();
const { PostUser } = require("../../Controllers/User/user-data-controller");

router.get("/test", () => {
  console.log("Working test");
});
// Post new use data to database
router.post("/add", PostUser);

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
