/* eslint-disable */
// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

const anagrmas = (str1, str2) => {
  let strI = {};
  let strII = {};
  for (let item of str1.toLowerCase()) {
    strI[item] = strI[item] + 1 || 1;
    console.log(`strI[item] - ${strI[item]}`);
  }
  for (let item of str2.toLowerCase()) {
    strII[item] = strII[item] + 1 || 1;
  }

  if (Object.keys(strI).length !== Object.keys(strII).length) {
    return false;
  }

  for (let item in strI) {
    if (strI[item] !== strII[item]) {
      return false;
    }
  }

  return true;
};

console.log(anagrmas("rail safety", "fairy tales"));
console.log(anagrmas("RAIL! SAFETY!", "fairy! tales!"));
console.log(anagrmas("Hi there", "Bye there"));
