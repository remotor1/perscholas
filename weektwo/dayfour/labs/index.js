/* eslint-disable */
// Write a while loop for the given output:
//  10, 30, 50, 70, 90
//  20, 40, 60, 80, 100
// - This could be acheived a few ways, be creative.

let counter = 1;

while (counter <= 100) {
  if (counter % 10 === 0) {
    console.log(counter, "- multiple of 10");
  }
  counter += 1;
}
// Write a while loop that prints all numbers from 500 - 800 only if they are divisible by 4.

function numbers(startNumber, finishNumber) {
  let number = startNumber;
  while (number <= finishNumber) {
    if (number % 4 === 0) {
      console.log(number, "- multiple of 4");
    }
    number += 1;
  }
}

numbers(500, 800);
