const {
  QueryListOfContacts,
  QueryTargetContact,
  QueryUpdateContact,
  QueryDeleteContact,
  QueryMatchingContact,
} = require("../Services/address");

// Get all contacts in the collection
const GetAllContacts = async (req, res) => {
  const contactList = await QueryListOfContacts();
  return res.json(contactList);
};
// Get contacts pagination
const GetPaginateContacts = async (req, res) => {
  const page = parseInt(req.query.page);
  const size = parseInt(req.query.size);
  const contactList = await QueryListOfContacts();
  const contacts = await contactList
    .skip(page * size)
    .limit(size)
    .toArray();
  console.log(page, size);
  console.log(contacts);
  return res.json(contacts);
};
// Get one contact with ID
const GetTargetContact = async (req, res) => {
  const targetContact = await QueryTargetContact(req.params.id);
  if (!targetContact) {
    return res.status(404).send({ message: "data not found" });
  }
  return res.send(targetContact);
};
// Get phase matching contacts based on address
const GetMatchingContact = async (req, res) => {
  const matchingContacts = await QueryMatchingContact(req.params.phase);
  if (!matchingContacts) {
    return res.status(404).send({ message: "data not found" });
  }
  return res.send(matchingContacts);
};
// Update Contact
const UpdateContact = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const updateResult = await QueryUpdateContact(
    id,
    req.body.element_to_update,
    req.body.update_data
  );
  res.json(updateResult);
};
// Delete contact
const DeleteContact = async (req, res) => {
  const deleteResult = await QueryDeleteContact(req.params.id);
  res.send(deleteResult);
};

module.exports = {
  GetAllContacts,
  GetTargetContact,
  UpdateContact,
  DeleteContact,
  GetPaginateContacts,
  GetMatchingContact,
};
