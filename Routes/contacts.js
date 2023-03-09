const express = require("express");
const router = express.Router();
const {
  validateID,
  validatePost,
  isArray,
  validatePagenation,
  validateParamOfPhase,
} = require("../Validation/validations");
const {
  GetAllContacts,
  GetPaginateContacts,
  GetTargetContact,
  UpdateContact,
  DeleteContact,
  GetMatchingContact,
} = require("../Controllers/contacts");
const {
  PostOneContact,
  PostManyContact,
} = require("../Controllers/contacts_post");
//jsonwebtoken verification
const { verifyJWT } = require("../Validation/validation_jwt");

router.get("/all", GetAllContacts);
router.get("/get", validatePagenation, GetPaginateContacts);
router.get("/getmatch/:phase", validateParamOfPhase, GetMatchingContact);
router.get("/:id", validateID, GetTargetContact);
router.post("/add", verifyJWT, validatePost, PostOneContact);
router.post("/addmany", verifyJWT, PostManyContact);
router.put("/update/:id", verifyJWT, validateID, UpdateContact);
router.delete("/delete/:id", verifyJWT, validateID, DeleteContact);
// return router
module.exports = router;
