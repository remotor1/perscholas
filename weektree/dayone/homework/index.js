/* eslint-disable */
// Requirements
// Define and code 5 of the 9 functions below.

// Define the functions using the approach as specified (either as a function expression or declaration).

// Be sure to number each function with a comment above it.

// After each function, call it at least once and console.logthe results.

// (completed above) Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed

// 1.
function maxOfTwoNumbers(x, y) {
  if (x >= y) {
    return x;
  } else {
    return y;
  }

  // or more "elegantly" using the fantastic ternary expression!
  // return  x >= y ? x : y;
}

console.log(maxOfTwoNumbers(3, 9));

// Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

const maxOfThreethat = (a, b, c) => {
  return a > b && a > c ? a : b > a && b > c ? b : c;
};
console.log(maxOfThreethat(434, 3435, 54554));
console.log(maxOfThreethat(434, 32423432423, 54554));

// Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(character) {
  // A, E, I, O, U, Y, W
  const vowels = ["A", "E", "I", "O", "U", "Y", "W"];
  return vowels.includes(character.toUpperCase());
}
console.log(isCharAVowel("d"));
console.log(isCharAVowel("a"));

// Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

const sumArray = (array) => {
  let summ = 0;
  array.forEach((element) => {
    summ += element;
  });
  return summ;
};

console.log("sumArray - ", sumArray([2323, 25, 4534, 34534, 34635]));

// Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

function multiplyArray(array) {
  let summ = 1;
  array.forEach((element) => {
    summ *= element;
  });
  return summ;
}
console.log("multiplyArray - ", multiplyArray([2323, 25, 4534, 34534, 34635]));

// Define a function, as a function expression, numArgs that returns the number of arguments passed to the function when called.

const numArgs = (...arr) => arr.length;
console.log("numArgs - ", numArgs(2323, 25, 4534, 34534, 34635));

// Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log('reverseString("rockstar") - ', reverseString("rockstar"));

// Define a function, as a function expression, longestStringInArray that takes an array of strings as an argument and returns the length of the longest string.

const longestStringInArray = (arr) => {
  let longest = arr[0];
  for (i = 0; i < arr.length - 1; i += 1) {
    if (arr[i].split("").length < arr[i + 1].split("").length) {
      longest = arr[i + 1];
    }
  }
  return longest;
};
console.log(
  longestStringInArray([
    "eeeeeeeeeeeeeeeeeeeeeeee",
    "ccccccccccccccccccc",
    "dddddddddddddddddddddddddddddd",
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  ])
);

// Define a function, as a function declaration, stringsLongerThan that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

function stringsLongerThan(arr, num) {
  let newArr = [];

  for (i = 0; i <= arr.length - 1; i += 1) {
    console.log("111111", arr[i]);
    if (arr[i].length > num) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(
  stringsLongerThan(
    ["eeeee", "ccc", "ddddddddddddddddd", "aaaaaaaaa", "dd", "ffffffffff"],
    10
  )
);
