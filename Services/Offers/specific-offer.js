const getSpecificUserElement = (userID, data) => {
  let returnArray = [];

  for (let i = 0; i < data.length; i++) {
    if (data[i].UID == userID) {
      returnArray.push(data[i]);
    }
  }
  return returnArray;
};

module.exports = { getSpecificUserElement };
