/* eslint-disable */

/*
Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.
*/
function same(arr1, arr2) {
  const result = [];
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr2[i] !== arr1[i] ** 2) {
      return false;
    }
  }
  return true;
}

console.log(same([2, 2, 3], [4, 4, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false (must be same frequency)

console.log(
  "%cAlien ship " + " is destroyed!!!",
  "font-weight: bold; background: green; border: 1px solid black; color: white;"
);
