// Builds reverse alternating caps string
exports.buildConcatString = (alphabets) => {
  let combined = alphabets.join("");
  combined = combined.split("").reverse().join("");

  let result = "";
  for (let i = 0; i < combined.length; i++) {
    result += (i % 2 === 0) 
      ? combined[i].toUpperCase() 
      : combined[i].toLowerCase();
  }
  return result;
};
