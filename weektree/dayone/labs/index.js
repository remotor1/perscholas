// Challenge: addList

// =======Difficulty: Basic

// Prompt:

// - Write a function called addList that accepts any quantity of numbers as arguments,
//   adds them together and returns the resulting sum.
// - Assume all parameters will be numbers. <=========
// - If called with no arguments, return 0 (zero).

// Examples:

// addList(1) //=> 1
// addList(1,50,1.23) //=> 52.23
// addList(7,-12) //=> -5

// */

// // Your solution for 01-addList here:

const addList = (...list) => {
  let counter = 0;
  list.forEach((element) => {
    counter += element;
  });
  return counter;
};

console.log(addList(1, 50, 1.23));
console.log(addList(3, 53434, 1.23));
console.log(addList(4, 34355, 3));
console.log(addList());
