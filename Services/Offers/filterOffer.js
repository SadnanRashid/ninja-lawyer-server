function filterArray(array, id) {
  console.log(array);
  for (let i = 0; i < array.length; i++) {
    if (array[i]._id == id) {
      return array[i];
    }
  }
}

module.exports = { filterArray };
