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

module.exports = { titleCase };
