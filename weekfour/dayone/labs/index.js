/* eslint-disable */
// Write a function called minusOnethat takes a parameter num. Assuming the argument is a number, print the argument -1.

const minusOne = (num) => {
  console.log(num - 1);
};

minusOne(10); // 9
minusOne(100); // 99
minusOne(Infinity); // Infinity

// Write a function makeSentencethat takes three parameters and concatenates them into a fully formed sentence.

const makeSentence = (word1, word2, word3) => {
  console.log(`${word1} ${word2} ${word3}`);
};

makeSentence("I", "want", "chimichangas");

// Write a function called getLastElementthat takes a parameter arr.
// Invoke the function with an array as the argument.
// The function should print the last element within the array.

const getLastElement = (arr) => {
  console.log(arr[arr.length - 1]);
};

getLastElement([1, 2, 3, 4, 5, 6]); // 6
getLastElement(["a", "b", "c"]); // 'c'
getLastElement([
  [1, 2, 3],
  [4, 5, 6],
]); // [4, 5, 6]
