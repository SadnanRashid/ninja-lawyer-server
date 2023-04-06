const filterReviewsRatings = (array, rating) => {
  let returnArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].rating === rating) {
      returnArray.push(array[i]);
    }
  }
  return returnArray;
};

module.exports = { filterReviewsRatings };
