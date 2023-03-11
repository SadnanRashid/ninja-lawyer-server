const addTimestampToUpdate = (data) => {
  const timeStamp = new Date();
  data.lastupdate = timeStamp;
  return data;
};

module.exports = { addTimestampToUpdate };
