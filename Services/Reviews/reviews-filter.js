const filterReviewsRatings = (array, rating) => {
  let returnArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].rating === rating) {
      returnArray.push(array[i]);
    }
  }
  return returnArray;
};

const filterReviewOnTime = (array) => {
  let iTime;
  let jTime;
  // latest to old
  for (let i = 0; i < array.length; i++) {
    iTime = new Date(array[i].timestamp);
    for (let j = 0; j < array.length; j++) {
      jTime = new Date(array[j].timestamp);
      if (iTime.getTime() > jTime.getTime()) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};

const filterReviewOnTimeOffers = (arrayy) => {
  const array = arrayy.offers;
  let iTime;
  let jTime;
  // latest to old
  for (let i = 0; i < array.length; i++) {
    iTime = new Date(array[i].timestamp);
    for (let j = 0; j < array.length; j++) {
      jTime = new Date(array[j].timestamp);
      if (iTime.getTime() > jTime.getTime()) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};

module.exports = {
  filterReviewsRatings,
  filterReviewOnTime,
  filterReviewOnTimeOffers,
};
