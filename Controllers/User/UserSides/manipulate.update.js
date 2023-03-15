const addTimestampToUpdate = (data) => {
  const timeStamp = new Date();
  console.log(timeStamp);
  data.lastupdate = timeStamp;
  return data;
};

module.exports = { addTimestampToUpdate };
