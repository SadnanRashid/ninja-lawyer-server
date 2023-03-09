// MongoDB ID must be 24 in length
const validateID = (req, res, next) => {
  if (req.params.id.length !== 24) {
    return res.status(403).json({ message: "invalid format/id" });
  }
  next();
};
// Check if var is array
const isArray = (req, res, next) => {
  if (!Array.isArray(req.body)) {
    return res
      .status(403)
      .json({ message: "the data must be an array of object" });
  }
  next();
};
// Validate GetMatchingContact
const validateParamOfPhase = (req, res, next) => {
  if (!req.params.phase) {
    return res
      .status(403)
      .json({ message: "the request must contain a search phase" });
  }
  next();
};
// validation for pagination - not necessary but standard to use
const validatePagenation = (req, res, next) => {
  const page = parseInt(req.query.page);
  const size = parseInt(req.query.size);
  if (!page || !size || page < 0 || size < 0) {
    return res
      .status(403)
      .json({ message: "pagination must have positive page and size queries" });
  }
  next();
};

// Validate POST data
// Validation of object data should return all the error causing inputs..
// Return an array of errors along with a error message
const validatePost = (req, res, next) => {
  let array = [];
  // function to check length
  const checkLength = (elementName, element, length) => {
    if (element.length < length) {
      array.push(`${elementName} must be ${length} chars or longer`);
    }
  };
  // function to check email
  const checkEmail = (element) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!element.match(emailRegex)) {
      array.push(`email is not a valid email format`);
    }
  };
  checkLength("first_name", req.body.first_name, 3);
  checkLength("last_name", req.body.last_name, 3);
  checkLength("country", req.body.country, 3);
  checkLength("address", req.body.address, 6);
  checkEmail(req.body.email);
  console.log(array);
  if (array.length > 0) {
    return res.status(403).json({ message: "invalid inputs", error: array });
  }
  next();
};

module.exports = {
  validateID,
  validatePost,
  isArray,
  validatePagenation,
  validateParamOfPhase,
};
