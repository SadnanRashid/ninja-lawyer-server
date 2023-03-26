function titleCase(inputString) {
  // Split the input string by underscores to create an array of words
  const wordsArray = inputString.split("_");

  // Capitalize the first letter of each word and join the words with spaces
  const spacedString = wordsArray
    .map((word) => {
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      return capitalizedWord;
    })
    .join(" ");

  // Return the spaced string
  return spacedString;
}

function capitalizeAndReplace(arr) {
  return arr.map((str) => {
    // Replace underscores with spaces
    const replacedStr = str.replace(/_/g, " ");

    // Split the string into words
    const words = replacedStr.split(" ");

    // Capitalize the first letter of each word
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Join the capitalized words back into a string
    return capitalizedWords.join(" ");
  });
}

module.exports = { titleCase, capitalizeAndReplace };
