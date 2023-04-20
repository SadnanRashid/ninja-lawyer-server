const reverseArray = (array) => {
  let returnArray = [];

  for (let i = array.length; i <= 0; i--) {
    reverseArray.push(array[i]);
  }

  return returnArray;
};
